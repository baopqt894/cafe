import Image from "next/image";
import { cafe, highlights } from "@/data/cafe";

const externalProps = {
  target: "_blank",
  rel: "noreferrer noopener",
} as const;

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M4 10h11M10.5 5.5 15 10l-4.5 4.5" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" className="fill" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M14 21v-8h3l.5-4H14V7.3c0-1.2.4-2.3 2.2-2.3H18V1.4c-.7-.1-1.6-.2-2.8-.2-3.1 0-5.2 1.9-5.2 5.5V9H7v4h3v8" />
    </svg>
  );
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: cafe.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: "62 Lê Đình Dương",
      addressLocality: "Hải Châu",
      addressRegion: "Đà Nẵng",
      addressCountry: "VN",
    },
    telephone: "+84327399651",
    email: cafe.email,
    priceRange: "₫",
    sameAs: [cafe.instagram, cafe.facebook, cafe.maps],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:15",
        closes: "23:00",
      },
    ],
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Đi đến nội dung chính
      </a>

      <div className="announcement" aria-label="Thông tin mở cửa">
        <span>Mở cửa mỗi ngày</span>
        <span aria-hidden="true">✦</span>
        <span>{cafe.hours}</span>
        <span aria-hidden="true">✦</span>
        <span>Hải Châu, Đà Nẵng</span>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Mie:n Space — về đầu trang">
          <Image
            src="/images/mien-logo.jpg"
            alt=""
            width={44}
            height={44}
            priority
          />
          <span>
            <strong>mie:n space</strong>
            <small>coffee & bakery</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Điều hướng chính">
          <a href="#story">Chuyện của Miên</a>
          <a href="#space">Không gian</a>
          <a href="#flavours">Hương vị</a>
          <a href="#visit">Ghé Miên</a>
        </nav>

        <a className="header-cta" href={cafe.maps} {...externalProps}>
          Chỉ đường
          <ArrowIcon />
        </a>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Coffee, bakery & a little pause</p>
            <h1 id="hero-title">
              Một góc nhỏ
              <br />
              để ngày <em>chậm lại.</em>
            </h1>
            <p className="hero-lead">
              Giữa nhịp phố Đà Nẵng, Miên giữ lại một khoảng nắng, một ly cà
              phê vừa vị và một chiếc ghế dành cho bạn.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#space">
                Xem không gian
                <ArrowIcon />
              </a>
              <a className="text-link" href={cafe.maps} {...externalProps}>
                <PinIcon />
                {cafe.shortAddress}
              </a>
            </div>

            <dl className="hero-meta">
              <div>
                <dt>Mở cửa</dt>
                <dd>Mỗi ngày · {cafe.hours}</dd>
              </div>
              <div>
                <dt>Tìm Miên</dt>
                <dd>Ngay trung tâm Hải Châu</dd>
              </div>
            </dl>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrap">
              <Image
                src="/images/mien-sunlit-space.jpg"
                alt="Khách ngồi bên cửa sổ ngập nắng tại Mie:n Space"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 48vw"
              />
            </div>
            <div className="hero-stamp" aria-hidden="true">
              <span>Mie:n Space</span>
              <b>☻</b>
              <span>Est. 2024</span>
            </div>
            <p className="image-caption">
              62 Lê Đình Dương
              <span>16°03&apos;N, 108°13&apos;E</span>
            </p>
          </div>
        </section>

        <section className="manifesto" id="story" aria-label="Tinh thần Mie:n Space">
          <p>Ban ngày gom nắng,</p>
          <p>buổi tối lên đèn.</p>
          <span>Ở giữa là những câu chuyện chưa vội kể xong.</span>
        </section>

        <section className="story section-shell">
          <div className="section-intro">
            <p className="section-index">01 — Chuyện của Miên</p>
            <h2>Một nơi đủ riêng tư để tập trung, đủ gần gũi để thuộc về.</h2>
          </div>
          <div className="story-copy">
            <p>
              Miên không cố làm mọi thứ thật nhiều. Một không gian ấm, đồ uống
              chỉn chu và sự tử tế trong từng cuộc gặp — vậy là đủ để bạn ghé
              một lần, rồi muốn quay lại.
            </p>
            <p>
              Có người đến làm việc, có người đọc sách, có người chỉ ngồi nhìn
              nắng đổi màu. Mỗi người một nhịp, Miên dành chỗ cho tất cả.
            </p>
          </div>
        </section>

        <section className="space-section" id="space" aria-labelledby="space-title">
          <div className="section-shell">
            <div className="space-heading">
              <div>
                <p className="section-index">02 — Không gian</p>
                <h2 id="space-title">Nắng, gỗ và những khoảng thở.</h2>
              </div>
              <p>
                Nhiều góc ngồi với những nhịp riêng, để một buổi cà phê có
                thể là cuộc hẹn, giờ làm việc hay khoảng nghỉ của riêng bạn.
              </p>
            </div>

            <div className="photo-grid">
              <figure className="photo photo-tall">
                <Image
                  src="/images/mien-upstairs.jpg"
                  alt="Không gian tầng trên sáng và nhiều cây xanh"
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
                <figcaption>Góc làm việc ngập nắng</figcaption>
              </figure>
              <figure className="photo photo-small">
                <Image
                  src="/images/mien-corner.jpg"
                  alt="Chiếc bàn thấp với hoa trong không gian tông nâu ấm"
                  fill
                  sizes="(max-width: 760px) 100vw, 40vw"
                />
                <figcaption>Một góc để ngồi lâu</figcaption>
              </figure>
              <figure className="photo photo-wide">
                <Image
                  src="/images/mien-creative.jpg"
                  alt="Khách vẽ tranh tại Mie:n Space"
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
                <figcaption>Cứ làm điều bạn thích</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="flavours section-shell" id="flavours" aria-labelledby="flavours-title">
          <div className="flavours-heading">
            <p className="section-index">03 — Hương vị</p>
            <h2 id="flavours-title">Bắt đầu bằng một ly vừa gu.</h2>
          </div>

          <div className="flavour-layout">
            <div className="flavour-list">
              {highlights.map((item) => (
                <article key={item.number}>
                  <span>{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="flavour-images">
              <figure className="drink-image">
                <Image
                  src="/images/mien-cold-brew.jpg"
                  alt="Ba món cold brew tại Mie:n Space"
                  fill
                  sizes="(max-width: 900px) 100vw, 36vw"
                />
              </figure>
              <figure className="pastry-image">
                <Image
                  src="/images/mien-coffee-croissant.jpg"
                  alt="Cà phê và bánh croissant mang đi"
                  fill
                  sizes="(max-width: 900px) 45vw, 18vw"
                />
              </figure>
              <figure className="summer-image">
                <Image
                  src="/images/mien-summer-breeze.jpg"
                  alt="Cold brew chanh vàng trong nắng"
                  fill
                  sizes="(max-width: 900px) 45vw, 18vw"
                />
              </figure>
            </div>
          </div>
          <p className="menu-note">
            Menu thay đổi theo mùa. Ghé quầy để tụi mình gợi ý một món đúng tâm
            trạng hôm nay.
          </p>
        </section>

        <section className="rhythm" id="rhythm">
          <div className="rhythm-image">
            <Image
              src="/images/mien-conversation.jpg"
              alt="Khách trò chuyện và làm việc trong không gian ngập nắng tại Mie:n Space"
              fill
              unoptimized
              sizes="(max-width: 900px) 100vw, 42vw"
            />
          </div>
          <div className="rhythm-copy">
            <p className="section-index">04 — Nhịp ở Miên</p>
            <h2>Một ngày ở Miên, theo cách của bạn.</h2>
            <div>
              <span>Buổi sáng</span>
              <p>
                Một ly cà phê vừa pha, một góc ngồi sáng và nhịp ngày bắt đầu
                thật chậm.
              </p>
            </div>
            <div>
              <span>Buổi chiều</span>
              <p>
                Ghé tránh nắng, mở laptop hoặc để một cuộc trò chuyện kéo dài
                thêm chút nữa.
              </p>
            </div>
            <div>
              <span>Buổi tối</span>
              <p>
                Đèn lên, nhạc dịu lại. Cứ ngồi thêm một chút trước khi trở về.
              </p>
            </div>
          </div>
        </section>

        <section className="visit section-shell" id="visit" aria-labelledby="visit-title">
          <div className="visit-heading">
            <div>
              <p className="section-index">05 — Ghé Miên</p>
              <h2 id="visit-title">Hẹn bạn ở 62 Lê Đình Dương.</h2>
            </div>
            <div className="rating" aria-label="4.5 trên 5 sao từ 220 đánh giá Google">
              <span>4.5</span>
              <div>
                <b aria-hidden="true">★★★★★</b>
                <p>220 đánh giá trên Google</p>
              </div>
            </div>
          </div>

          <div className="visit-layout">
            <div className="map-wrap">
              <iframe
                src={cafe.mapEmbed}
                title="Bản đồ chỉ đường đến Mie:n Space"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="visit-card">
              <Image
                src="/images/mien-facade.jpg"
                alt="Mặt tiền Mie:n Space tại số 62 Lê Đình Dương"
                fill
                sizes="(max-width: 900px) 100vw, 38vw"
              />
              <div className="visit-card-content">
                <p>{cafe.address}</p>
                <a href={cafe.maps} {...externalProps}>
                  Mở Google Maps
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-row">
            <div>
              <span>Giờ mở cửa</span>
              <strong>Mỗi ngày, {cafe.hours}</strong>
            </div>
            <div>
              <span>Gọi Miên</span>
              <a href={cafe.phoneHref}>{cafe.phone}</a>
            </div>
            <div>
              <span>Viết cho Miên</span>
              <a href={`mailto:${cafe.email}`}>{cafe.email}</a>
            </div>
          </div>
        </section>

        <section className="social-banner" aria-label="Theo dõi Mie:n Space">
          <p>Những ngày thường ở Miên</p>
          <h2>@mienspacedn</h2>
          <div>
            <a href={cafe.instagram} {...externalProps}>
              <InstagramIcon />
              Instagram
            </a>
            <a href={cafe.facebook} {...externalProps}>
              <FacebookIcon />
              Facebook
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <Image src="/images/mien-logo.jpg" alt="" width={72} height={72} />
          <p>
            Mie:n Space
            <span>Coffee & Bakery · Đà Nẵng</span>
          </p>
        </div>
        <p className="footer-note">Life begins after coffee.</p>
        <a href="#top" className="back-to-top">
          Lên đầu trang ↑
        </a>
      </footer>

      <div className="mobile-dock" aria-label="Thao tác nhanh">
        <a href={cafe.phoneHref}>Gọi Miên</a>
        <a href={cafe.maps} {...externalProps}>
          Chỉ đường
          <ArrowIcon />
        </a>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
