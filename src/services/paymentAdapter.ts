import { PaymentService } from '../application/ports'
import { fakeApi } from './api'

export function usePayment(): PaymentService {
  return {
    tryPay(amount: PriceCents) {
      console.log(amount)

      return fakeApi(true)
    }
  }
}
