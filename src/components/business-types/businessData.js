// Reusable image pool for reliable loading
const imgCafe = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000";
const imgRest = "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1000";
const imgRetail = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000";
const imgMobile = "https://images.unsplash.com/photo-1580828369019-2238f6982885?auto=format&fit=crop&q=80&w=1000";
const imgPrep = "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&q=80&w=1000";
const imgQR = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000";

export const businessData = {
  "activity": {
    overline: "LEISURE & ENTERTAINMENT",
    heading: "Activity & Escape Room POS",
    subtext: "Manage slot bookings, walk-ins, and digital waivers with an all-in-one Point of Sale designed for gaming zones, adventure experiences, and entertainment venues.",
    pricing: "£169/month · 0.99%* + 20p per transaction (Pro)",
    primaryCta: "Book A Demo",
    secondaryCta: "Start Free",
    heroImage: imgMobile,
    cardTitle: "Activities",
    stickyFeatures: {
      heading: "Built For Entertainment Venues",
      features: [
        { title: "Seamless Slot Booking", description: "Allow customers to book time slots online or at the counter. Double-bookings are a thing of the past with real-time capacity management.", image: imgMobile },
        { title: "Walk-in Kiosks", description: "Reduce queues during peak weekend rushes with self-serve kiosks for fast walk-in ticketing and payments.", image: imgRetail },
        { title: "Digital Waivers & CRM", description: "Collect digital waivers seamlessly before play begins and automatically sync player data to your marketing CRM.", image: imgQR }
      ]
    },
    faqData: {
      overline: "FAQS",
      headingLine1: "Activity POS",
      headingLine2: "Questions",
      subtext: "Learn how KorePOS Pro can streamline your entertainment venue.",
      cta: "Contact us",
      faqs: [
        { question: "Can I manage different games or rooms simultaneously?", answer: "Yes, the system allows you to manage multiple zones, escape rooms, or laser tag arenas from a single dashboard." },
        { question: "Does it support online bookings?", answer: "Absolutely. Our booking widget integrates directly into your website and syncs instantly with your in-store POS." },
        { question: "Can we sell merchandise and snacks?", answer: "Yes, you can process retail merchandise, food, and beverage sales on the exact same till you use for ticketing." }
      ]
    }
  },

  "bakeries-and-sweet-shops": {
    overline: "FOOD & BEVERAGE",
    heading: "Bakery & Sweet Shop POS",
    subtext: "A lightning-fast POS system for bakeries, confectioneries, and mithai stores. Handle morning rushes, custom cake orders, and counter payments effortlessly.",
    pricing: "£0 Monthly Fees · 0.99%* + 20p per transaction (Lite)",
    primaryCta: "Start Free",
    secondaryCta: "Book A Demo",
    heroImage: imgCafe,
    cardTitle: "Bakeries",
    stickyFeatures: {
      heading: "Optimize Your Counter Service",
      features: [
        { title: "Rapid Counter Checkout", description: "Process orders in seconds with a highly visual, touch-friendly interface optimized for fast-moving queues.", image: imgCafe },
        { title: "Pre-order Management", description: "Keep track of custom birthday cakes and bulk festive orders with detailed notes and deposit tracking.", image: imgPrep },
        { title: "Inventory & Waste Tracking", description: "Monitor daily bakes, track ingredient usage, and log end-of-day waste to improve your profit margins.", image: imgRetail }
      ]
    },
    faqData: {
      overline: "FAQS",
      headingLine1: "Bakery POS",
      headingLine2: "Questions",
      subtext: "Everything you need to know about running your sweet shop with KorePOS.",
      cta: "Contact us",
      faqs: [
        { question: "Can I sell items by weight?", answer: "Yes, KorePOS integrates with supported scales to calculate prices instantly for items sold by grams or kilos (perfect for mithai and loose goods)." },
        { question: "Does it track daily baked inventory?", answer: "Yes, you can reset your inventory daily to match your fresh bake counts, preventing staff from selling items you've run out of." },
        { question: "Is the software really free?", answer: "KorePOS Lite has zero monthly subscription fees. You only pay standard transaction rates when processing card payments." }
      ]
    }
  },

  "beauty-salons-and-barbers": {
    overline: "BEAUTY & WELLNESS",
    heading: "Salon & Barber Shop POS",
    subtext: "Combine appointment scheduling, walk-in management, and integrated payments. The perfect point of sale for spas, grooming centers, and salons.",
    pricing: "Start Free or Upgrade to Pro · 0.99%* + 20p per txn",
    primaryCta: "Book A Demo",
    secondaryCta: "Start Free",
    heroImage: imgRetail,
    cardTitle: "Salons & Spas",
    stickyFeatures: {
      heading: "Elevate Your Guest Experience",
      features: [
        { title: "Smart Appointment Booking", description: "Let clients book their favorite stylists online. Calendar sync ensures you never overlap appointments.", image: imgMobile },
        { title: "Staff Commissions", description: "Automatically calculate stylist commissions and tips at checkout, simplifying your payroll at the end of the month.", image: imgRetail },
        { title: "Retail & Product Sales", description: "Upsell shampoos and styling products easily during checkout. Inventory tracking alerts you when stock is low.", image: imgQR }
      ]
    },
    faqData: {
      overline: "FAQS",
      headingLine1: "Salon POS",
      headingLine2: "Questions",
      subtext: "Discover how our software adapts to beauty and wellness businesses.",
      cta: "Contact us",
      faqs: [
        { question: "Can clients book specific staff members?", answer: "Yes, your online booking page allows clients to choose their preferred barber or stylist." },
        { question: "Can I accept deposits for large bookings?", answer: "Absolutely. You can require partial or full payments upfront to reduce no-shows for expensive treatments." },
        { question: "Do you support loyalty programs?", answer: "Yes, reward your regulars with automated points or digital punch cards to keep them coming back." }
      ]
    }
  },

  "cafes-and-coffee-shops": {
    overline: "FOOD & BEVERAGE",
    heading: "Coffee Shop & Cafe POS",
    subtext: "Keep the queue moving and the espresso machine pulling shots. One unified system for counter service, kitchen dockets, and customer loyalty.",
    pricing: "Start Free or Upgrade to Pro · 0.99%* + 20p per txn",
    primaryCta: "Book A Demo",
    secondaryCta: "Start Free",
    heroImage: imgCafe,
    cardTitle: "Cafés",
    stickyFeatures: {
      heading: "Built For The Morning Rush",
      features: [
        { title: "Lightning Fast Tap-to-Pay", description: "Integrated card terminals mean no manual entry errors. Tap, pay, and keep the morning queue flowing.", image: imgCafe },
        { title: "Advanced Modifiers", description: "Oat milk? Extra shot? Half-sweet? Customize drinks effortlessly with intelligent modifier groups that update pricing instantly.", image: imgPrep },
        { title: "QR Table Ordering", description: "Let guests scan a code to order from their table. Tickets route directly to the barista, freeing up your floor staff.", image: imgQR }
      ]
    },
    faqData: {
      overline: "FAQS",
      headingLine1: "Cafe POS",
      headingLine2: "Questions",
      subtext: "Still have questions about our coffee shop solutions?",
      cta: "Contact us",
      faqs: [
        { question: "Can I print sticky labels for cups?", answer: "Yes, KorePOS integrates with standard label printers so baristas know exactly what goes in every cup." },
        { question: "Does it work offline?", answer: "Yes, if your internet drops, you can still take orders and cash payments. Systems sync once reconnected." },
        { question: "Can I track barista performance?", answer: "Detailed reports show you sales by staff member, peak hours, and popular modifier combinations." }
      ]
    }
  },

  "charity-and-donations": {
    overline: "NON-PROFIT",
    heading: "Charity & Donation POS",
    subtext: "Empower your NGO, mosque, or charity drive with digital payment tools. Collect tap-to-donate contributions seamlessly and securely.",
    pricing: "£0 Monthly Fees · 0.99%* + 20p per transaction (Lite)",
    primaryCta: "Start Free",
    secondaryCta: "Contact Sales",
    heroImage: imgMobile,
    cardTitle: "Charity",
    stickyFeatures: {
      heading: "Modernize Your Fundraising",
      features: [
        { title: "Tap-to-Donate", description: "Turn smartphones or simple card readers into donation kiosks. Supporters just tap their card and go.", image: imgMobile },
        { title: "Preset Donation Amounts", description: "Set quick-select amounts (e.g., £5, £10, £20) to speed up the donation process during crowded events.", image: imgRetail },
        { title: "Digital Receipts & Tracking", description: "Provide instant digital receipts for tax purposes via email or SMS, and track campaign success in real-time.", image: imgQR }
      ]
    },
    faqData: {
      overline: "FAQS",
      headingLine1: "Donation POS",
      headingLine2: "Questions",
      subtext: "Learn how to optimize your charity collections.",
      cta: "Contact us",
      faqs: [
        { question: "Do you offer discounted rates for registered charities?", answer: "Please contact our sales team to discuss custom processing rates for registered non-profits." },
        { question: "Can I set this up as an unattended kiosk?", answer: "Yes, you can lock the screen to a specific donation flow, perfect for placing at entrances or registration desks." },
        { question: "How fast do funds settle?", answer: "Donations are securely processed and settle into your organization's bank account usually within 1-2 business days." }
      ]
    }
  },

  "cloud-kitchens": {
    overline: "FOOD & BEVERAGE",
    heading: "Cloud Kitchen POS System",
    subtext: "Consolidate delivery apps, manage multiple virtual brands from a single screen, and streamline kitchen workflows with our delivery-first POS.",
    pricing: "£169/month · 0.99%* + 20p per transaction (Pro)",
    primaryCta: "Book A Demo",
    secondaryCta: "Start Free",
    heroImage: imgPrep,
    cardTitle: "Cloud Kitchens",
    stickyFeatures: {
      heading: "Master Delivery Operations",
      features: [
        { title: "Delivery App Aggregation", description: "UberEats, Deliveroo, and JustEat orders flow directly into one system. No more tablet juggling.", image: imgMobile },
        { title: "Multi-Brand Management", description: "Running 3 virtual brands out of one kitchen? Manage menus, inventory, and reporting for all of them centrally.", image: imgPrep },
        { title: "Kitchen Display Systems (KDS)", description: "Digitize your prep stations. Route specific items to specific screens (e.g., fryers vs. grill) with live timer tracking.", image: imgRetail }
      ]
    },
    faqData: {
      overline: "FAQS",
      headingLine1: "Cloud Kitchen",
      headingLine2: "Questions",
      subtext: "Scale your delivery-only business with confidence.",
      cta: "Contact us",
      faqs: [
        { question: "Can I change menus across all delivery apps at once?", answer: "Yes, a single menu update in KorePOS pushes to all integrated delivery platforms instantly." },
        { question: "How does it handle 86'd (sold out) items?", answer: "Mark an item as sold out in your POS, and it automatically updates across your delivery channels to prevent rejected orders." },
        { question: "Do you provide driver tracking?", answer: "Our system logs when orders are handed to drivers, helping you dispute unfair delivery times or cold-food complaints." }
      ]
    }
  },

  "event-organizers": {
    overline: "EVENTS & ENTERTAINMENT",
    heading: "Event & Exhibition POS",
    subtext: "Ticket sales, fast-paced bar tabs, and attendee management. The ultimate event operating system for organizers, private functions, and exhibitions.",
    pricing: "£169/month · 0.99%* + 20p per transaction (Pro)",
    primaryCta: "Book A Demo",
    secondaryCta: "Start Free",
    heroImage: imgMobile,
    cardTitle: "Events",
    stickyFeatures: {
      heading: "Flawless Event Execution",
      features: [
        { title: "Rapid Ticketing", description: "Sell tickets online or at the door. Scan QR codes for fast, secure entry to prevent bottlenecks.", image: imgQR },
        { title: "Offline Mode Resiliency", description: "Festivals in fields often have terrible Wi-Fi. Our offline mode ensures you can keep selling drinks and merch without a signal.", image: imgMobile },
        { title: "Multi-Vendor Reporting", description: "If you run tokens or manage multiple bars, get centralized reporting to see exactly which stands are performing best.", image: imgRetail }
      ]
    },
    faqData: {
      overline: "FAQS",
      headingLine1: "Event POS",
      headingLine2: "Questions",
      subtext: "Run your next big event without a hitch.",
      cta: "Contact us",
      faqs: [
        { question: "Can I rent hardware just for a weekend event?", answer: "Yes, we offer short-term hardware rentals specifically for pop-ups and weekend festivals. Contact sales for details." },
        { question: "Does it support wristband payments (RFID)?", answer: "We support integrations with major cashless event providers. Ask our team for a compatibility list." },
        { question: "How do I track VIP vs General Admission?", answer: "Create different ticket tiers in the backend. The scanning app will instantly display the attendee's access level." }
      ]
    }
  },

  "festivals-and-markets": {
    overline: "POP-UPS & OUTDOORS",
    heading: "Festival & Market POS",
    subtext: "Designed for seasonal markets and multi-vendor festivals requiring battery-powered hardware, mobile connectivity, and rapid transaction processing.",
    pricing: "£0 Monthly Fees · 0.99%* + 20p per transaction (Lite)",
    primaryCta: "Start Free",
    secondaryCta: "Book A Demo",
    heroImage: imgMobile,
    cardTitle: "Festivals",
    stickyFeatures: {
      heading: "Built For The Outdoors",
      features: [
        { title: "Tap to Pay on iPhone/Android", description: "No hardware required. Take contactless payments directly on your smartphone to keep setup incredibly light.", image: imgMobile },
        { title: "Offline Payments", description: "Don't let patchy 4G stop your sales. Queue payments offline and process them securely when you get home.", image: imgQR },
        { title: "Quick-Add Catalog", description: "Set up a visual menu of your products in minutes. Large, colorful buttons make checking out fast in bright sunlight.", image: imgRetail }
      ]
    },
    faqData: {
      overline: "FAQS",
      headingLine1: "Market POS",
      headingLine2: "Questions",
      subtext: "Everything you need to sell at your next market.",
      cta: "Contact us",
      faqs: [
        { question: "Do I need Wi-Fi to take card payments?", answer: "You can use 4G/5G data, or utilize our Offline Mode to queue transactions if you lose signal completely." },
        { question: "Can I print receipts?", answer: "You can send digital receipts via email/SMS, or connect a portable Bluetooth printer for physical copies." },
        { question: "Is there a contract?", answer: "No. KorePOS Lite is contract-free. You only pay standard processing fees when you actually make a sale." }
      ]
    }
  },

  "food-trucks": {
    overline: "FOOD & BEVERAGE",
    heading: "Food Truck POS System",
    subtext: "A mobile-first Point of Sale that works anywhere. Fast checkout, Kitchen Display integration, and QR ordering built for food trucks and street vendors.",
    pricing: "£0 Monthly Fees · 0.99%* + 20p per transaction (Lite)",
    primaryCta: "Start Free",
    secondaryCta: "Book A Demo",
    heroImage: imgPrep,
    cardTitle: "Food Trucks",
    stickyFeatures: {
      heading: "Street-Food Ready",
      features: [
        { title: "Line-Busting QR Codes", description: "Print a QR code on a stand outside your truck. Customers order and pay on their phones while they wait.", image: imgQR },
        { title: "Compact Kitchen Displays", description: "Replace lost paper tickets with an iPad KDS. See exactly what needs to be fired on the grill in real-time.", image: imgPrep },
        { title: "Mobile Connectivity", description: "Connect via cellular data hotspots. Space-saving, battery-powered terminals mean no messy cables.", image: imgMobile }
      ]
    },
    faqData: {
      overline: "FAQS",
      headingLine1: "Food Truck POS",
      headingLine2: "Questions",
      subtext: "Hit the road with the ultimate mobile setup.",
      cta: "Contact us",
      faqs: [
        { question: "Can I run the whole system off an iPad?", answer: "Yes! KorePOS is iOS and Android compatible. You can run your entire till and KDS from tablets." },
        { question: "How do customers know their food is ready?", answer: "If they order via QR code, they receive an SMS text message automatically when you mark the order as 'Ready'." },
        { question: "What hardware is best for tight spaces?", answer: "We recommend our all-in-one smart terminals, which combine the screen, card reader, and receipt printer into one handheld device." }
      ]
    }
  },

  "gardens-and-nurseries": {
    overline: "RETAIL",
    heading: "Garden Center & Nursery POS",
    subtext: "Manage massive plant inventories, bulk soil sales, and outdoor checkout zones with a POS built for nurseries and landscaping stores.",
    pricing: "£0 Monthly Fees · 0.99%* + 20p per transaction (Lite)",
    primaryCta: "Start Free",
    secondaryCta: "Book A Demo",
    heroImage: imgRetail,
    cardTitle: "Nurseries",
    stickyFeatures: {
      heading: "Grow Your Retail Operations",
      features: [
        { title: "Barcode & Mobile Scanning", description: "Use mobile devices to scan heavy bags of soil or large plants right in the customer's cart—no lifting required.", image: imgMobile },
        { title: "Complex Inventory", description: "Easily track seasonal stock, perishable plants, and non-barcode items with categorized visual menus.", image: imgRetail },
        { title: "Customer Accounts & Wholesale", description: "Set up accounts for professional landscapers, track purchase history, and offer custom wholesale discounts.", image: imgQR }
      ]
    },
    faqData: {
      overline: "FAQS",
      headingLine1: "Nursery POS",
      headingLine2: "Questions",
      subtext: "Plant the seeds for better business management.",
      cta: "Contact us",
      faqs: [
        { question: "Can I sell items by volume or weight?", answer: "Yes, you can sell mulch, soil, or stone by the yard/kilo by entering the exact quantity into the POS." },
        { question: "Does the hardware survive outdoor use?", answer: "Our mobile terminals are highly durable. Just ensure they are kept out of direct rain, and they will perform flawlessly in outdoor enclosures." },
        { question: "Can I print barcodes for unlabelled plants?", answer: "Yes, the system generates barcodes which you can print on weather-resistant labels using supported printers." }
      ]
    }
  },

  "grocery-and-convenience-stores": {
    overline: "RETAIL",
    heading: "Grocery & Convenience POS",
    subtext: "A high-speed checkout system for local supermarkets, off-licenses, and convenience stores. Features rapid barcode scanning and scale integration.",
    pricing: "Start Free or Upgrade to Pro · 0.99%* + 20p per txn",
    primaryCta: "Book A Demo",
    secondaryCta: "Start Free",
    heroImage: imgRetail,
    cardTitle: "Grocery",
    stickyFeatures: {
      heading: "Keep Lines Moving",
      features: [
        { title: "Rapid Barcode Scanning", description: "Scan items instantly. The interface is optimized for speed, ensuring long evening queues are cleared in minutes.", image: imgRetail },
        { title: "Scale Integration", description: "Connect to approved weight scales for seamless pricing of loose produce, fruits, and vegetables.", image: imgPrep },
        { title: "Low Stock Alerts", description: "Get automatic notifications when your top-selling items or daily essentials are running low.", image: imgMobile }
      ]
    },
    faqData: {
      overline: "FAQS",
      headingLine1: "Grocery POS",
      headingLine2: "Questions",
      subtext: "Optimize your convenience store operations.",
      cta: "Contact us",
      faqs: [
        { question: "Does it support Age Verification prompts?", answer: "Yes, the system can prompt cashiers to check ID for restricted items like alcohol and tobacco." },
        { question: "Can I import thousands of barcodes?", answer: "Absolutely. Use our CSV upload tool to import massive supplier catalogs and barcodes in a single click." },
        { question: "Can I manage lottery and utility payments?", answer: "You can create custom non-taxable open categories to log external services securely." }
      ]
    }
  },

  "gyms-and-fitness-centers": {
    overline: "HEALTH & WELLNESS",
    heading: "Gym & Fitness Studio POS",
    subtext: "Manage memberships, drop-in class bookings, and front-desk retail sales. The perfect POS for yoga studios, gyms, and personal trainers.",
    pricing: "£0 Monthly Fees · 0.99%* + 20p per transaction (Lite)",
    primaryCta: "Start Free",
    secondaryCta: "Book A Demo",
    heroImage: imgMobile,
    cardTitle: "Fitness",
    stickyFeatures: {
      heading: "Streamline Your Studio",
      features: [
        { title: "Membership & Subscription Billing", description: "Securely store cards on file to automate monthly membership fees and class pack renewals.", image: imgQR },
        { title: "Front Desk Retail", description: "Sell protein shakes, branded apparel, and water bottles effortlessly alongside class check-ins.", image: imgRetail },
        { title: "Class Scheduling", description: "Let members book their spots online. View rosters directly on the front-desk POS to mark attendance.", image: imgMobile }
      ]
    },
    faqData: {
      overline: "FAQS",
      headingLine1: "Fitness POS",
      headingLine2: "Questions",
      subtext: "Keep your gym running at peak performance.",
      cta: "Contact us",
      faqs: [
        { question: "Can members manage their own cards on file?", answer: "Yes, via a secure portal, members can update expired credit cards to prevent failed payments." },
        { question: "Does it work with entry turnstiles?", answer: "We support webhook integrations that can trigger physical access systems upon successful check-in." },
        { question: "Can I sell split payments (e.g., card + cash)?", answer: "Yes, you can split payments easily across multiple tender types for a single transaction." }
      ]
    }
  },

  "hotels-and-resorts": {
    overline: "HOSPITALITY",
    heading: "Hotel & Resort POS",
    subtext: "A unified system connecting your front desk, restaurant, and room service. Manage guest operations seamlessly from check-in to check-out.",
    pricing: "£169/month · 0.99%* + 20p per transaction (Pro)",
    primaryCta: "Book A Demo",
    secondaryCta: "Start Free",
    heroImage: imgRest,
    cardTitle: "Hotels",
    stickyFeatures: {
      heading: "Five-Star Guest Experiences",
      features: [
        { title: "Charge to Room", description: "Guests can order drinks at the bar or food via room service and seamlessly charge it directly to their room folio.", image: imgRest },
        { title: "Multi-Zone Management", description: "Manage the lobby cafe, rooftop bar, and main restaurant under one centralized reporting dashboard.", image: imgPrep },
        { title: "QR Room Service", description: "Place QR codes in guest rooms. Orders are sent straight to the kitchen KDS, eliminating phone miscommunications.", image: imgQR }
      ]
    },
    faqData: {
      overline: "FAQS",
      headingLine1: "Hotel POS",
      headingLine2: "Questions",
      subtext: "Elevate your hospitality operations.",
      cta: "Contact us",
      faqs: [
        { question: "Does this integrate with my PMS?", answer: "KorePOS Pro integrates with leading Property Management Systems (PMS) to sync folios automatically." },
        { question: "Can we have different menus for different hotel bars?", answer: "Yes, each POS terminal can be assigned its own specific menu, layout, and pricing." },
        { question: "Is tip pooling supported?", answer: "Yes, advanced labor management allows you to distribute tips fairly across your F&B staff." }
      ]
    }
  },

  "juice-bars-and-smoothie-shops": {
    overline: "FOOD & BEVERAGE",
    heading: "Juice Bar POS System",
    subtext: "Built for speed and heavy customization. Easily handle fresh ingredient modifications, combo deals, and loyalty programs for your smoothie shop.",
    pricing: "£0 Monthly Fees · 0.99%* + 20p per transaction (Lite)",
    primaryCta: "Start Free",
    secondaryCta: "Book A Demo",
    heroImage: imgCafe,
    cardTitle: "Juice Bars",
    stickyFeatures: {
      heading: "Fresh Tech For Fresh Drinks",
      features: [
        { title: "Complex Modifiers Made Easy", description: "Add whey protein, swap almond milk, or remove ginger with a single tap. Pricing updates instantly.", image: imgPrep },
        { title: "Sticky Label Printing", description: "Print custom drink labels automatically so your team knows exactly what modifications go into which blender.", image: imgRetail },
        { title: "Digital Loyalty", description: "Replace paper punch cards. Customers earn points via their phone number, keeping them coming back for their daily green juice.", image: imgQR }
      ]
    },
    faqData: {
      overline: "FAQS",
      headingLine1: "Juice Bar POS",
      headingLine2: "Questions",
      subtext: "Blend speed and efficiency.",
      cta: "Contact us",
      faqs: [
        { question: "Can I set up 'Build Your Own' bowls?", answer: "Absolutely. Our nested modifier tools let customers choose a base, 3 fruits, and a topping sequentially." },
        { question: "Do you support online ordering for pickup?", answer: "Yes, customers can pre-order their morning smoothie online so it's ready when they walk in." },
        { question: "How does ingredient tracking work?", answer: "You can link specific fruits or supplements to menu items, deducting from your master inventory with every sale." }
      ]
    }
  },

  "mobile-service-businesses": {
    overline: "SERVICES",
    heading: "Mobile Service POS",
    subtext: "Take payments on the go. Perfect for mobile car washes, plumbers, repair technicians, and in-home service providers.",
    pricing: "£0 Monthly Fees · 0.99%* + 20p per transaction (Lite)",
    primaryCta: "Start Free",
    secondaryCta: "Book A Demo",
    heroImage: imgMobile,
    cardTitle: "Mobile Services",
    stickyFeatures: {
      heading: "Business In Your Pocket",
      features: [
        { title: "Tap to Pay on Phone", description: "Use your own smartphone to accept contactless cards and Apple Pay. No card readers required.", image: imgMobile },
        { title: "Digital Invoicing", description: "Complete a job and instantly text or email a payment link to your client for seamless online payment.", image: imgQR },
        { title: "Quote to Invoice Workflow", description: "Send estimates, get approval, and convert them to paid invoices directly from the field.", image: imgRetail }
      ]
    },
    faqData: {
      overline: "FAQS",
      headingLine1: "Mobile Service POS",
      headingLine2: "Questions",
      subtext: "Get paid faster out in the field.",
      cta: "Contact us",
      faqs: [
        { question: "Do my technicians need their own card readers?", answer: "No, if they have modern smartphones, they can use the Tap to Pay feature via the KorePOS app." },
        { question: "Can I add photos to invoices?", answer: "Yes, you can attach before/after photos of your work directly to digital receipts and invoices." },
        { question: "Are card details kept secure?", answer: "We use bank-level encryption. Card details are tokenized and never stored on your actual device." }
      ]
    }
  },

  "restaurants": {
    overline: "FOOD & BEVERAGE",
    heading: "Full-Service Restaurant POS",
    subtext: "Dine-in table management, synchronized kitchen workflows, QR ordering, and robust inventory. The definitive operating system for modern restaurants.",
    pricing: "£169/month · 0.99%* + 20p per transaction (Pro)",
    primaryCta: "Book A Demo",
    secondaryCta: "Start Free",
    heroImage: imgRest,
    cardTitle: "Restaurants",
    stickyFeatures: {
      heading: "Orchestrate The Dining Room",
      features: [
        { title: "Interactive Floor Plans", description: "Mirror your dining room visually. Track table status, seat times, and course progression at a glance.", image: imgRest },
        { title: "Course & Fire", description: "Hold mains while starters are eating. Fire tickets to the kitchen exactly when the table is ready.", image: imgPrep },
        { title: "Effortless Bill Splitting", description: "Split by item, fraction, or custom amount without the headache. Keep tables turning faster.", image: imgMobile }
      ]
    },
    faqData: {
      overline: "FAQS",
      headingLine1: "Restaurant POS",
      headingLine2: "Questions",
      subtext: "Everything you need to master service.",
      cta: "Contact us",
      faqs: [
        { question: "Does the Kitchen Display System (KDS) support multiple stations?", answer: "Yes, route drinks to the bar, steaks to the grill, and salads to the prep station automatically." },
        { question: "Can servers take orders at the table?", answer: "Absolutely. Our mobile POS allows waitstaff to send orders straight to the kitchen without walking to a terminal." },
        { question: "How does the reservations integration work?", answer: "We integrate with major booking platforms, allowing table statuses to update automatically as guests arrive." }
      ]
    }
  },

  "retail-stores": {
    overline: "RETAIL",
    heading: "Retail POS System",
    subtext: "Powerful inventory tracking, barcode scanning, and multi-location support. Perfect for clothing boutiques, electronics, and general retail.",
    pricing: "Start Free or Upgrade to Pro · 0.99%* + 20p per txn",
    primaryCta: "Book A Demo",
    secondaryCta: "Start Free",
    heroImage: imgRetail,
    cardTitle: "Retail",
    stickyFeatures: {
      heading: "Total Stock Control",
      features: [
        { title: "Variants & Matrices", description: "Easily manage products with multiple sizes, colors, and styles under a single master item.", image: imgRetail },
        { title: "Purchase Orders & Receiving", description: "Generate POs when stock gets low, and scan items upon delivery to automatically update inventory counts.", image: imgPrep },
        { title: "Customer Profiles", description: "Track purchase history and preferences to offer highly personalized service and targeted email marketing.", image: imgQR }
      ]
    },
    faqData: {
      overline: "FAQS",
      headingLine1: "Retail POS",
      headingLine2: "Questions",
      subtext: "Optimize your store from checkout to stockroom.",
      cta: "Contact us",
      faqs: [
        { question: "Can I connect an existing barcode scanner?", answer: "Yes, KorePOS integrates via Bluetooth or USB with almost all standard retail barcode scanners." },
        { question: "Does it sync with my eCommerce website?", answer: "Yes, we integrate with platforms like Shopify and WooCommerce so your online and in-store inventory is always aligned." },
        { question: "Can I process returns and exchanges?", answer: "Easily process partial or full refunds to the original payment method, or issue store credit." }
      ]
    }
  },

  "stalls-and-pop-up-shops": {
    overline: "POP-UPS",
    heading: "Pop-Up Shop POS",
    subtext: "Temporary setups demand flexible tech. Fast checkout, zero hardware requirements, and offline support for exhibition booths and flea markets.",
    pricing: "£0 Monthly Fees · 0.99%* + 20p per transaction (Lite)",
    primaryCta: "Start Free",
    secondaryCta: "Book A Demo",
    heroImage: imgMobile,
    cardTitle: "Pop-Ups",
    stickyFeatures: {
      heading: "Set Up In Seconds",
      features: [
        { title: "Zero Hardware Required", description: "Download the app and use Tap to Pay on your smartphone. You can literally start selling in 5 minutes.", image: imgMobile },
        { title: "Social Media Selling", description: "Generate payment links to sell products directly through Instagram or TikTok DMs alongside your physical stall.", image: imgQR },
        { title: "Cash Tracking", description: "Easily log cash transactions alongside your card sales for perfectly balanced end-of-day reports.", image: imgRetail }
      ]
    },
    faqData: {
      overline: "FAQS",
      headingLine1: "Pop-Up POS",
      headingLine2: "Questions",
      subtext: "Perfect for temporary and seasonal merchants.",
      cta: "Contact us",
      faqs: [
        { question: "Do I have to sign a long-term contract?", answer: "No! You can use KorePOS for a 2-day pop-up and only pay the standard processing fees for those two days." },
        { question: "How do I print receipts?", answer: "You can email or text them, or buy a small Bluetooth printer that clips to your belt." },
        { question: "Can I track my best-selling items?", answer: "Yes, your dashboard will show you exactly which products moved fastest during your event." }
      ]
    }
  },

  "tour-operators": {
    overline: "TOURISM",
    heading: "Tour Operator POS",
    subtext: "Manage bookings, process in-person ticket sales, and accept on-the-go payments for guided tours, city experiences, and excursions.",
    pricing: "Start Free or Upgrade to Pro · 0.99%* + 20p per txn",
    primaryCta: "Book A Demo",
    secondaryCta: "Start Free",
    heroImage: imgMobile,
    cardTitle: "Tour Operators",
    stickyFeatures: {
      heading: "Run Better Excursions",
      features: [
        { title: "Unified Ticketing", description: "Sell tickets on your website and via mobile POS on the street. Availability syncs perfectly in real-time.", image: imgMobile },
        { title: "Mobile Guide Check-In", description: "Guides can scan QR codes on customer phones at the meeting point to verify tickets instantly.", image: imgQR },
        { title: "Upsell Merchandise", description: "Sell water, souvenirs, or photo packages out in the field using Tap to Pay on a smartphone.", image: imgRetail }
      ]
    },
    faqData: {
      overline: "FAQS",
      headingLine1: "Tour Operator POS",
      headingLine2: "Questions",
      subtext: "Manage your tourism business seamlessly.",
      cta: "Contact us",
      faqs: [
        { question: "Can we handle group bookings?", answer: "Yes, you can sell bulk tickets and offer automatic discounts for large family or corporate groups." },
        { question: "What if the tour gets canceled due to weather?", answer: "You can easily issue bulk refunds or convert tickets into credit for a future date." },
        { question: "Do you integrate with OTA platforms like Viator?", answer: "Yes, through our booking partners, you can sync your capacity with major Online Travel Agencies." }
      ]
    }
  },

  "workshops-and-classes": {
    overline: "EDUCATION & HOBBIES",
    heading: "Workshop & Class POS",
    subtext: "Schedule sessions, manage student capacities, and sell supplies. The perfect system for art studios, cooking classes, and training centers.",
    pricing: "Start Free or Upgrade to Pro · 0.99%* + 20p per txn",
    primaryCta: "Book A Demo",
    secondaryCta: "Start Free",
    heroImage: imgRetail,
    cardTitle: "Workshops",
    stickyFeatures: {
      heading: "Tools for Teaching",
      features: [
        { title: "Class Scheduling & Roster", description: "Publish your monthly calendar. Students book online, and your POS updates the live class roster automatically.", image: imgMobile },
        { title: "Material Kits Upselling", description: "Students can add premium material kits or tools to their cart when booking their class.", image: imgRetail },
        { title: "Automated Reminders", description: "Reduce no-shows by automatically sending SMS and email reminders 24 hours before the workshop begins.", image: imgQR }
      ]
    },
    faqData: {
      overline: "FAQS",
      headingLine1: "Workshop POS",
      headingLine2: "Questions",
      subtext: "Focus on teaching, we handle the payments.",
      cta: "Contact us",
      faqs: [
        { question: "Can I set maximum class capacities?", answer: "Yes, once a class hits your set limit, the system automatically marks it as 'Sold Out'." },
        { question: "Can students pay deposits?", answer: "You can configure classes to require a 50% deposit upfront and collect the remainder in person via the POS." },
        { question: "Do you offer private event booking tools?", answer: "Yes, clients can submit inquiries for private workshops, and you can send them custom payment links." }
      ]
    }
  },

  "others": {
    overline: "CUSTOM BUSINESS",
    heading: "Flexible POS Software",
    subtext: "A highly adaptable Point of Sale designed for unique workflows, niche services, and industry-specific requirements outside traditional classifications.",
    pricing: "Start Free or Upgrade to Pro · Custom hardware available",
    primaryCta: "Talk to Sales",
    secondaryCta: "Start Free",
    heroImage: imgRetail,
    cardTitle: "Other Businesses",
    stickyFeatures: {
      heading: "Tailored to How You Operate",
      features: [
        { title: "Custom Catalogs & Flow", description: "Whether you sell services, physical products, or a mix of both, the interface molds to your workflow.", image: imgRetail },
        { title: "Open API Integrations", description: "Connect your bespoke CRM, accounting software, or niche legacy tools directly to our cloud backend.", image: imgPrep },
        { title: "Hardware Flexibility", description: "Run your business on an iPad, an Android smartphone, or a fully wired enterprise terminal.", image: imgMobile }
      ]
    },
    faqData: {
      overline: "FAQS",
      headingLine1: "Custom POS",
      headingLine2: "Questions",
      subtext: "Discover how KorePOS adapts to unique business models.",
      cta: "Contact us",
      faqs: [
        { question: "Can I customize the receipt format?", answer: "Yes, you can add custom logos, terms of service, return policies, and social links to both digital and printed receipts." },
        { question: "Do you offer bespoke onboarding?", answer: "For complex implementations, our enterprise team provides white-glove setup and menu engineering services." },
        { question: "Can we use our own payment processor?", answer: "While KorePOS Payments offers the best integration, we do support specific external gateways on our Pro plans." }
      ]
    }
  }
};