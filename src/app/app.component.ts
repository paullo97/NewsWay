import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Response } from './core/services/models/response.model';
import { loadNews } from './core/store/news/news.actions';
import { getNewsLoading } from './core/store/news/news.selectors';
import { NewsStore } from './core/store/news/news.store';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent
{
	public loading$: Observable<boolean> = this.store.select(getNewsLoading);

	constructor(private store: Store<NewsStore>,)
	{
    this.store.dispatch(loadNews());
  }

	public response: Response = {
		articles: [
			{
				source: {
					id: null,
					name: "The Guardian"
				},
				author: "Guardian Staff",
				title: "The best £6 I ever spent! 31 small items that could make your life a tiny bit better",
				description: "Ducky toast tongs, candle sharpeners and an apple tree … our writers name one gadget, gizmo or thing they didn’t know they couldn’t live without“Have nothing in your houses that you do not know to be useful, or believe to be beautiful,” William Morris said. I…",
				url: "https://amp.theguardian.com/technology/2022/aug/27/the-best-6-i-ever-spent-31-small-items-that-could-make-your-life-a-tiny-bit-better",
				urlToImage: "https://i.guim.co.uk/img/media/ff8d6f2946b688a115bf0ea4cda61516c62e0dce/0_1783_5944_3566/master/5944.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=f0023bfbdfd43f42c416e5f22792cd1e",
				publishedAt: new Date(),
				content: "The roll-up sun visor\r\nHave nothing in your houses that you do not know to be useful, or believe to be beautiful, William Morris said. Im fussier. Have nothing in your wardrobe that you do not know t… [+16990 chars]"
			},
			{
				source: {
					id: null,
					name: "The Guardian"
				},
				author: "Jo Jones and Helen Seamons",
				title: "Watch your tone: How to add tonal shades for a sophisticated look",
				description: "It’s time to step away from black and navy, and add some earthy colours to your wardrobeAs the seasons change, make Brad Pitt and his Bullet Train promo wardrobe your moodboard hero. His bespoke combos by Haans Nicholas Mott in life-affirming shades from peac…",
				url: "https://amp.theguardian.com/fashion/2022/aug/27/watch-your-tone-how-to-add-tonal-shades-for-a-sophisticated-look",
				urlToImage: "https://i.guim.co.uk/img/media/784b9916e8b7953b32150395af417654b0049e5c/0_69_2048_1229/master/2048.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e9938b85d1a8ebf6cdec8188ad99c890",
				publishedAt: new Date(),
				content: "As the seasons change, make Brad Pitt and his Bullet Train promo wardrobe your moodboard hero. His bespoke combos by Haans Nicholas Mott in life-affirming shades from peach (left) and iced-bun pink t… [+2036 chars]"
			},
			{
				source: {
					id: null,
					name: "MacRumors"
				},
				author: "Hartley Charlton",
				title: "iPhone 13 vs. iPhone 14 Buyer's Guide: Should You Upgrade?",
				description: "The iPhone 14 and ‌iPhone 14‌ Max are expected to succeed the iPhone 13 mini and ‌iPhone 13‌ at next month's Apple event, but how different are the two successive iPhone generations rumored to be?\n\n\n\n\n\nIn 2021, Apple unveiled the ‌iPhone 13‌ as the successor …",
				url: "https://www.macrumors.com/guide/iphone-13-vs-iphone-14/",
				urlToImage: "https://images.macrumors.com/t/rDBaPnMhQauoCkWs42F1x6K4SKQ=/1920x/article-new/2022/08/iPhone-13-vs-iPhone-14-Feature.jpg",
				publishedAt: new Date(),
				content: "The iPhone 14 and ‌iPhone 14‌ Max are expected to succeed the iPhone 13 mini and ‌iPhone 13‌ at next month's Apple event, but how different are the two successive iPhone generations rumored to be?\r\nI… [+12741 chars]"
			},
			{
				source: {
					id: null,
					name: "CNET"
				},
				author: "Karisa Langlo",
				title: "iPhone 14 Rumors: Everything We Expect for Apple's 2022 Phone - CNET",
				description: "Apple's likely to reveal the iPhone 14 on Sept. 7. Here's what we've heard so far.",
				url: "https://www.cnet.com/tech/mobile/iphone-14-rumors-everything-we-expect-for-apples-2022-phone/",
				urlToImage: "https://www.cnet.com/a/img/resize/c8dd4ffbfbdfaff0055c34328baec9191a737986/2021/09/21/cafa4f54-6949-498c-ab54-d57f6a13e618/iphone-13-mini-cnet-review-2021-106.jpg?auto=webp&fit=crop&height=630&width=1200",
				publishedAt: new Date(),
				content: "Hold off from buying a new iPhone because Apple is likely just around the corner from revealing the rumored iPhone 14. Apple's \"Far Out\" launch event is coming Sept. 7, which means the new iPhone lin… [+16429 chars]"
			},
			{
				source: {
					id: null,
					name: "MacRumors"
				},
				author: "Joe Rossignol",
				title: "'Apple Watch Pro' Rumored to Feature Larger 47mm Case Size With Flat Display",
				description: "The so-called \"Apple Watch Pro\" will feature a larger 47mm case size, according to a report today from Japanese website Mac Otakara. By comparison, the Apple Watch Series 7 is available in 41mm and 45mm case sizes.\n\n\n\n\n\nA larger 47mm case size would result in…",
				url: "https://www.macrumors.com/2022/08/27/apple-watch-pro-47mm-rumor/",
				urlToImage: "https://images.macrumors.com/t/VX2NcxExKH9nGkHDeLKDvBtYgvY=/2556x/article-new/2021/09/apple-watch-series-7-mystery.png",
				publishedAt: new Date(),
				content: "The so-called \"Apple Watch Pro\" will feature a larger 47mm case size, according to a report today from Japanese website Mac Otakara. By comparison, the Apple Watch Series 7 is available in 41mm and 4… [+1143 chars]"
			}
		]
	}
}
