import Epic from './epic.js'

export default class squadeos extends Epic {
  constructor () {
    super()

    // OAuth2 credentials extracted from Squad Editor.
    this.clientId = 'xyza7891J7d3GU8ZIwCoC5xdBsdoqVWA'
    this.clientSecret = '4SLVBqAm09q776SIlQRTD6moM/bnGAWhDSqOxJAIS0s'
    this.deploymentId = '7685429b6da24082a63fcbb5f0f90e18'
    this.authByExternalToken = true
  }
}