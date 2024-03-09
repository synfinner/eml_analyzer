import type { IndicatorType, LinkType } from '@/schemas'
import { buildURL } from '@/utils'

export class Shodan implements LinkType {
  public baseURL: string
  public favicon: string
  public name: string
  public type: IndicatorType

  public constructor() {
    this.baseURL = 'https://www.shodan.io'
    this.favicon = `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${this.baseURL}`
    this.name = 'Shodan'
    this.type = 'ip'
  }

  public href(value: string): string {
    return buildURL(this.baseURL, `/host/${value}`)
  }
}
