const content = {
  topSummary: {
    heading: "Reservation confirmed for Barcelona",
    subheading: "Apartment in the best neighborhood in Barcelona",
    cards: [
      { label: "Dates", value: "Apr 18, 2026 - Apr 21, 2026" },
      { label: "Check-in / Check-out", value: "12:00 PM / 11:00 AM" },
      { label: "Address", value: "Carrer Aribau, Barcelona" },
    ],
  },
  email: {
    brand: "airbnb",
    title: "Your reservation is confirmed",
    subtitle: "You're going to Barcelona!",
    listingTitle: "Apartment in the best neighborhood in Barcelona",
    listingHost: "Entire home/apt hosted by Sunil",
    checkinDate: "Saturday, Apr 18, 2026",
    checkinTime: "Check-in: 12:00 PM - 10:00 PM",
    checkoutDate: "Tuesday, Apr 21, 2026",
    checkoutTime: "Checkout by 11:00 AM",
    itineraryCta: "View full itinerary",
    infoRows: [
      {
        label: "Address",
        value: "Carrer Aribau, Barcelona, Catalonia 08036, Spain",
        link: "Get directions",
      },
      { label: "Guests", value: "2 adults", link: "Invite guests" },
      {
        label: "Cancellation policy",
        value: "Cancelled less than 7 days before check-in.",
      },
      { label: "Payments", value: "Payment 1 of 1 · $ priceless!" },
      { label: "Amount paid (USD)", value: "$ priceless!" },
      { label: "Reservation code", value: "CC30BDAY" },
    ],
    secondaryCta: "Change reservation",
    bullets: {
      houseRules: [
        "Check-in: 12:00 PM - 10:00 PM",
        "Checkout: 11:00 AM",
        "Not suitable for children (yet 😉)",
      ],
      safety: ["Keep it sexy", "Keep it clean"],
    },
    host: {
      title: "Sunil is your host",
      body: "Contact Sunil to coordinate arrival time and key exchange.",
      linkText: "Message host",
      phone: "+34 603 260 994",
    },
    support: {
      title: "Customer support",
      body: "Contact our support team 24/7 from anywhere in the world.",
      linkText: "Visit Help Center",
    },
  },
  promos: [
    {
      title: "The block is hot. Considering travel insurance?",
      body: "Don't worry, you're in good hands.",
      cta: "",
    },
    {
      title: "Earn money toward your next trip",
      body: "Invite people you know to Airbnb. You'll get up to a bajillion dollars in credit when they complete a qualifying stay and/or go on a qualifying experience.",
      cta: "Send invites",
    },
    {
      title: "Local Requirement",
      body: "Spain has rules requiring accommodation providers to register guest details with local authorities.",
      cta: "",
    },
    {
      title: "Check for local travel advisories",
      body: "Before you travel, check the latest restrictions and guidance from local government sources.",
      cta: "Learn more",
    },
  ],
  footer: {
    sentWith: "Made with ❤️ from Sunil",
    address: "",
    link: "The block is hot!",
  },
};

export default function AirbnbPage() {
  return (
    <main className="min-h-screen bg-[#f3f3f3] p-4 md:p-8 text-[#222]">
      <div className="mx-auto w-full max-w-[760px] rounded-md border border-[#dddddd] bg-white">
        <section className="border-b border-[#e8e8e8] p-5">
          <p className="text-sm font-medium">{content.topSummary.heading}</p>
          <p className="mt-1 text-xs text-[#6b6b6b]">
            {content.topSummary.subheading}
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 text-xs text-[#444] md:grid-cols-3">
            {content.topSummary.cards.map((item) => (
              <div key={item.label}>
                <p className="text-[#888]">{item.label}</p>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-[620px] p-5 md:p-8">
          <p className="text-[13px] text-[#ff5a5f]">{content.email.brand}</p>
          <h1 className="mt-2 text-[34px] leading-tight font-semibold text-[#222]">
            {content.email.title}
          </h1>
          <p className="mt-1 text-[18px] text-[#555]">
            {content.email.subtitle}
          </p>

          <div className="mt-6 overflow-hidden rounded-sm border border-[#ddd]">
            <img
              src="/cc/airbnb/aribau.png"
              alt="Listing Image"
              className="w-full h-auto mb-2"
            />
            <div className="p-4">
              <p className="text-[18px]">{content.email.listingTitle}</p>
              <p className="text-sm text-[#666]">{content.email.listingHost}</p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 border-b border-[#e5e5e5] pb-5 text-sm">
            <div>
              <p className="font-medium">{content.email.checkinDate}</p>
              <p className="text-[#666]">{content.email.checkinTime}</p>
            </div>
            <div>
              <p className="font-medium">{content.email.checkoutDate}</p>
              <p className="text-[#666]">{content.email.checkoutTime}</p>
            </div>
          </div>

          <button className="mt-5 w-full bg-[#ff5a5f] px-4 py-3 text-sm font-semibold text-white">
            {content.email.itineraryCta}
          </button>

          <div className="mt-6 space-y-5 text-sm">
            {content.email.infoRows.map((row) => (
              <div
                key={row.label}
                className="flex items-start justify-between gap-4 border-b border-[#efefef] pb-3"
              >
                <div>
                  <p className="font-medium">{row.label}</p>
                  <p className="text-[#555]">{row.value}</p>
                </div>
                {row.link ? (
                  <span className="text-xs text-[#ff5a5f]">{row.link}</span>
                ) : null}
              </div>
            ))}
          </div>

          <button className="mt-6 w-full border border-[#d9d9d9] bg-white px-4 py-3 text-sm">
            {content.email.secondaryCta}
          </button>

          <SimpleList
            title="House rules"
            items={content.email.bullets.houseRules}
          />
          <SimpleList
            title="Safety & Property info"
            items={content.email.bullets.safety}
          />

          <div className="mt-6 border-t border-[#efefef] pt-5 text-sm">
            <p className="font-medium">{content.email.host.title}</p>
            <p className="mt-1 text-[#555]">{content.email.host.body}</p>
            <p className="mt-2 text-[#ff5a5f]">{content.email.host.linkText}</p>
            <p className="text-[#ff5a5f]">{content.email.host.phone}</p>
          </div>

          <div className="mt-6 border-t border-[#efefef] pt-5 text-sm">
            <p className="font-medium">{content.email.support.title}</p>
            <p className="mt-1 text-[#555]">{content.email.support.body}</p>
            <p className="mt-2 text-[#ff5a5f]">
              {content.email.support.linkText}
            </p>
          </div>

          <div className="mt-8 border-t border-[#e6e6e6]" />

          <div className="mt-6 space-y-6">
            {content.promos.map((item) => (
              <div key={item.title} className="border-b border-[#e6e6e6] pb-6">
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="mt-2 text-sm text-[#555]">{item.body}</p>
                {item.cta ? (
                  <p className="mt-3 text-sm font-medium text-[#ff5a5f]">
                    {item.cta}
                  </p>
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-7 overflow-hidden rounded-sm border border-[#ddd]">
            <div className="h-[140px] bg-[linear-gradient(135deg,#6f7f5f,#b8bf93)]" />
            <div className="p-4 text-sm">
              <p className="font-semibold">Refer a host, earn $60 cash</p>
              <button className="mt-2 border border-white bg-black/70 px-3 py-1 text-xs text-white">
                Learn more
              </button>
              <p className="mt-3 text-[#555]">
                Get a friend to start hosting on Airbnb and make extra money.
              </p>
            </div>
          </div>

          <footer className="mt-8 border-t border-[#e6e6e6] pt-6 text-xs text-[#777]">
            <p>{content.footer.sentWith}</p>
            <p className="mt-1">{content.footer.address}</p>
            <p className="mt-2 text-[#777] underline">{content.footer.link}</p>
          </footer>
        </section>
      </div>
    </main>
  );
}

function SimpleList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-6 border-t border-[#efefef] pt-5 text-sm">
      <p className="font-medium">{title}</p>
      <ul className="mt-2 space-y-1 text-[#555]">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
