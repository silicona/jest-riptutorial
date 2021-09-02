import { BaseService } from './BaseService'
import { HttpService, Inject } from '@nestjs/common'
import { Connection } from 'typeorm'
/*
import { AccessService } from 'modules/main/Access/services/Access.service'
import { ActivityService } from 'modules/tenant/Activity/services/Activity.service'
import { AuthService } from 'modules/main/Auth/services/Auth.service'
import { AvailabilityService } from 'modules/tenant/Availability/services/Availability.service'
import { BookingHistoricalService } from 'modules/tenant/BookingHistorical/services/BookingHistorical.service'
import { BookingPkgService } from 'modules/main/Booking/packages/booking.service'
import { ChannelManagerService } from 'modules/tenant/ChannelManager/services/ChannelManager.service'
import { ClientService } from 'modules/tenant/Client/services/Client.service'
import { ClientPkgService } from 'modules/tenant/Client/utils/pkg-client.service'
*/
/*
import { CryptService } from 'lib/crypt'
import { DomotelService } from 'modules/main/Booking/services/domotel/Domotel.service'
import { EventEmitter2 } from '@nestjs/event-emitter'
import { KeycodeService } from 'modules/tenant/Keycode/services/Keycode.service'
import { HotelService } from 'modules/main/Booking/services/hotel/hotel.service'
import { IncomeService } from 'modules/tenant/Income/services/Income.service'
import { MapService } from 'modules/main/Booking/packages/map.service'
import { MinimumStayService } from 'modules/tenant/Restriction/services/MinimumStay.service'
import { NewsletterService } from 'modules/tenant/Newsletter/services/Newsletter.service'
import { PaymentPkgService } from 'modules/main/Booking/packages/payment.service'
import { PaymentService } from 'modules/tenant/Payment/services/Payment.service'
import { PriceService } from 'modules/tenant/Rate/services/Price.service'
import { RateService } from 'modules/tenant/Rate/services/Rate.service'
import { ReservationService } from 'modules/tenant/Reservation/services/Reservation.service'
import { SeasonService } from 'modules/tenant/Season/services/Season.service'
import { SendMailService } from 'modules/mailing/services/sendMail.service'
import { SmsService } from 'modules/tenant/Sms/services/Sms.service'
import { SpaceLockService } from 'modules/tenant/SpaceLock/services/SpaceLock.service'
import { SpaceService } from 'modules/tenant/Space/services/Space.service'
import { SpaceSubtypeService } from 'modules/tenant/SpaceSubtype/services/SpaceSubtype.service'
import { SyncService } from 'modules/tenant/Sync/services/Sync.service'
import { TextService } from 'modules/tenant/Text/services/Text.service'
*/
export class BaseTenantService extends BaseService {
  constructor(
    /*
    public readonly accessService: AccessService,
    public readonly activityService: ActivityService,
    public readonly authService: AuthService,
    public readonly availabilityService: AvailabilityService,
    public readonly bookingHistoricalService: BookingHistoricalService,
    public readonly bookingPkg: BookingPkgService,
    public readonly channelManagerService: ChannelManagerService,
    public readonly clientPkg: ClientPkgService,
    public readonly clientService: ClientService,
    public readonly cryptService: CryptService,
    public readonly domotelService: DomotelService,
    public readonly eventEmitter: EventEmitter2,
    public readonly hotelService: HotelService,
    public readonly httpService: HttpService,
    public readonly incomeService: IncomeService,
    public readonly keycodeService: KeycodeService,
    public readonly mapService: MapService,
    public readonly minimumStayService: MinimumStayService,
    public readonly newslettersService: NewsletterService,
    public readonly paymentPkg: PaymentPkgService,
    public readonly paymentService: PaymentService,
    public readonly priceService: PriceService,
    public readonly rateService: RateService,
    public readonly reservationService: ReservationService,
    public readonly seasonService: SeasonService,
    public readonly sendMailService: SendMailService,
    public readonly smsService: SmsService,
    public readonly spaceLockService: SpaceLockService,
    public readonly spaceService: SpaceService,
    public readonly spaceSubtypeService: SpaceSubtypeService,
    public readonly syncService: SyncService,
    public readonly textService: TextService,
    */
    @Inject('CONNECTION') connection?: Connection
  ) {
    super(connection)
  }
}