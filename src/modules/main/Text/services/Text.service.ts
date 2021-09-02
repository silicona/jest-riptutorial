import { BaseTenantService } from 'core/BaseTenantService';
import { LanguagesEntity } from 'modules/mailing/Campaign/entities/Languages.entity';
import { LanguageTextEntity } from '../../../mailing/Campaign/entities/LanguageText.entity';


export class TextService extends BaseTenantService {
constructor(conn){ super(conn)}
  public getTextsById = async (hotelId: number, textId) => {
    const langs = await this.fetchLanguages(hotelId)
    const texts: any = await this.fetchTextsById(textId)

    return texts.reduce((acc, text) => ({ ...acc, [langs[text.lang]]: text.text }), {})
  }

  public getTextWithLang = (texts, _lang = 'es') => {
    const lang = _lang.toUpperCase()
    if (texts[lang] && texts[lang].trim()) return texts[lang].trim()
    if (texts.EN && texts.EN.trim()) return texts.EN.trim()
    return texts.ES ? texts.ES.trim() : ''
  }

  private fetchTextsById = async (textId: number) => await (await this.makeQB(LanguageTextEntity, 'lt'))
    .select(['idIdioma as lang', 'texto as text'])
    .where('idTexto = :textId', { textId })
    .getMany()

  private fetchLanguages = async (hotelId: number) => await (await this.makeQB(LanguagesEntity, 'i'))
    .select()
    .where('idHotel = :hotelId', { hotelId })
    .getOne()
}