import { HttpException, HttpService, HttpStatus } from '@nestjs/common';
import { EventEmitter2 } from 'eventemitter2';
import { response } from 'express';
import { AccessService } from 'modules/main/Access/services/Access.service';
/*
import { EmailService } from 'modules/mailing/services/email.service';
import { AuthService } from 'modules/main/Auth/services/Auth.service';
import { TokenService } from 'modules/main/Auth/services/Token.service';
import { BookingPkgService } from 'modules/main/Booking/packages/booking.service';
import { DomotelService } from 'modules/main/Booking/services/domotel/Domotel.service';
import { CurrencyService } from 'modules/main/Currency/services/Currency.service';
import { LocationService } from 'modules/main/Location/services/Location.service';
import { UserService } from 'modules/main/User/services/User.service';
import { ActivityService } from 'modules/tenant/Activity/services/Activity.service';
import { AvailabilityService } from 'modules/tenant/Availability/services/Availability.service';
import { BookingHistoricalService } from 'modules/tenant/BookingHistorical/services/BookingHistorical.service';
import { ChannelManagerService } from 'modules/tenant/ChannelManager/services/ChannelManager.service';
import { ClientService } from 'modules/tenant/Client/services/Client.service';
import { DailyPriceService } from 'modules/tenant/DailyPrice/services/DailyPrice.service';
import { DiscountService } from 'modules/tenant/Discount/services/Discount.service';
import { HotelEmailService } from 'modules/tenant/HotelEmail/services/HotelEmail.service';
import { IncomeService } from 'modules/tenant/Income/services/Income.service';
import { KeycodeService } from 'modules/tenant/Keycode/services/Keycode.service';
import { OmnitecLockService } from 'modules/tenant/OmnitecLock/services/OmnitecLock.service';
import { PaymentService } from 'modules/tenant/Payment/services/Payment.service';
import { PriceService } from 'modules/tenant/Rate/services/Price.service';
import { RateService } from 'modules/tenant/Rate/services/Rate.service';
import { RateIntelligentService } from 'modules/tenant/Rate/services/RateIntelligent.service';
import { ReservationService } from 'modules/tenant/Reservation/services/Reservation.service';
import { MinimumStayService } from 'modules/tenant/Restriction/services/MinimumStay.service';
import { RevenueService } from 'modules/tenant/Revenue/services/Revenue.service';
import { SeasonService } from 'modules/tenant/Season/services/Season.service';
import { SpaceService } from 'modules/tenant/Space/services/Space.service';
import { SpaceUpsellingService } from 'modules/tenant/Space/services/SpaceUpselling.service';
import { SpaceLockService } from 'modules/tenant/SpaceLock/services/SpaceLock.service';
import { SpaceSubtypeService } from 'modules/tenant/SpaceSubtype/services/SpaceSubtype.service';
import { SpaceTypeService } from 'modules/tenant/SpaceType/services/SpaceType.service';
import { TaxeService } from 'modules/tenant/Taxe/services/Taxe.service';
import { TravellerRegistryService } from 'modules/tenant/Traveller/services/TravellerRegistry.service';
import { WeatherService } from 'modules/tenant/Weather/services/Weather.service';
*/
import { SyncService } from 'modules/tenant/Sync/services/Sync.service';
export class BaseController {
  constructor(
      protected readonly accessService: AccessService,
      /*
    protected readonly activityService: ActivityService,
    protected readonly authService: AuthService,
    protected readonly availabilityService: AvailabilityService,
    protected readonly bookingHistoricalService: BookingHistoricalService,
    protected readonly bookingPkgService: BookingPkgService,
    protected readonly channelManagerService: ChannelManagerService,
    protected readonly clientService: ClientService,
    protected readonly currencyService: CurrencyService,
    protected readonly dailyPriceService: DailyPriceService,
    protected readonly discountService: DiscountService,
    protected readonly domotelService: DomotelService,
    protected readonly emailService: EmailService,
    protected readonly locationService: LocationService,
    protected readonly hotelEmailService: HotelEmailService,
    protected readonly httpService: HttpService,
    protected readonly incomeService: IncomeService,
    protected readonly keycodeService: KeycodeService,
    protected readonly minimumStayService: MinimumStayService,
    protected readonly omnitecLockService: OmnitecLockService,
    protected readonly paymentService: PaymentService,
    protected readonly priceService: PriceService,
    protected readonly rateIntelligentService: RateIntelligentService,
    protected readonly rateService: RateService,
    protected readonly revenueService: RevenueService,
    protected readonly reservationService: ReservationService,
    protected readonly seasonService: SeasonService,
    protected readonly spaceLockService: SpaceLockService,
    protected readonly spaceService: SpaceService,
    protected readonly spaceSubtypeService: SpaceSubtypeService,
    protected readonly spaceTypeService: SpaceTypeService,
    protected readonly spaceUpsellingService: SpaceUpsellingService,
    protected readonly taxeService: TaxeService,
    protected readonly tokenService: TokenService,
    protected readonly travellerRegistryService: TravellerRegistryService,
    protected readonly userService: UserService,
    protected readonly weatherService: WeatherService,
    */
   protected readonly syncService: SyncService,
   protected eventEmitter?: EventEmitter2,
  ) { }

  protected checkEmptyValue = (str) => !str || !`${str}`.trim().length;

  protected getHotelId = async (webCode: number) => (await this.accessService.getHotelByWebCode(webCode)).hotelId

  protected error = (message: String, error?, T = HttpStatus.BAD_REQUEST) => {
    throw new HttpException({ status: T, error: error ? { message: message, log: error } : { message: message } }, T)
  }
  protected returnData = (data, request?, status: number = 200) => response.status(status).json(request ? { data: data } : { request: request, data: data })
}
