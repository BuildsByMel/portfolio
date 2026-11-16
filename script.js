const projectCards = document.querySelectorAll(".project-card");
const modal = document.querySelector("#project-modal");

const modalTitle = document.querySelector("#modal-title");
//const modalDescription = document.querySelector("#modal-description");
const modalDetails = document.querySelector("#modal-details");

const closeButton = document.querySelector(".modal-close");
const closeFooterButton = document.querySelector(".modal-close-btn");



const featuredImage = document.querySelector("#modal-featured-image");
const imageTitle = document.querySelector("#modal-image-title");
const imageDescription = document.querySelector("#modal-image-description");
const thumbnails = document.querySelector(".modal-thumbnails");

const projectStatus = document.querySelector("#modal-status");

const liveLink = document.querySelector(".modal-live-link");
const techTags = document.querySelector(".modal-tech-content .tags");

let lastFocusedElement = null;

//#region************************************************  PROJECT DATA                 ******************************************

/* ====================================================== AJS CLEANING SERVICES ============================================ */

const projectData = { 
     "AJ's Cleaning Services": {
        displayTitle: "AJ's Cleaning Services - Full Stack Web Application",
        status: "Completed - Domain Expired",

        overview:
            `Developed as a three-person academic capstone project, this full-stack web application was designed to establish an online presence for a local cleaning business. The client needed a platform to increase business visibility, reach potential customers, and streamline incoming service inquiries. The project involved collaborating on the overall application while developing individual features and contributing to a cohesive user experience.`,
        
        challenge:
            `The business needed to establish an online presence with a clear, accessible layout that would make services and business information easy to find. The website also needed an intuitive way for potential customers to submit detailed inquiries and connect with the business.`,

        contributions: [
            "Integrated MapTiler API to provide interactive mapping functionality.",
            "Developed a JavaScript carousel to display Facebook customer reviews.",
            "Implemented custom CSS styling for the map, reviews carousel, and homepage imagery.",
            "Developed form submission and email functionality.",
            "Constructed email content dynamically using submitted form data.",
            "Configured an SMTP client to connect to Gmail's SMTP server using app-password authentication and encrypted communication.",
            "Implemented CSS styling for the contact form and submission success message.",
            "Created and configured the application database.",
            "Integrated database-driven service information into the Services page.",
            "Created the final project PowerPoint presentation.",
            "Prepared administrative and client-facing project documentation."
        ],

        technologies: [
            "C#",
            "ASP.NET Core",
            "Javascript",
            "SQL",
            "HTML",
            "CSS",
            "UI/UX",
            "API",
            "Integrations",
            "Project Documentation & Presentation"
        ],

        images: [
            {
                src: "images/AJS/AjsHomepage.png",
                title: "Homepage",
                description: `Designed a clean and modern homepage with clear navigation, along with an intuitive map 
                              for demographic targeting.`,
                alt: "AJ's Cleaning Services Homepage",
                label: "Homepage"
            },
            {
                src: "images/AJS/AjsServices.png",
                title: "Services Offered",
                description: `Simple drop down menu for services offered, with clear descriptions.`,
                alt: "AJ's Cleaning Services Services OfferedPage",
                label: "Services"
            },
            {
                src: "images/AJS/AjsContactForm.png",
                title: "Contact Form",
                description: "Created a simple contact form for customers to reach out for inquiries or service requests.",
                alt: "Aj's Cleaning Services Contact Form",
                label: "Contact Form"
            },
            {
                src: "images/AJS/AjsFAQ.png",
                title: "FAQ's",
                description: "Added to reduce support inquiries. Front-end developed by a teammate",
                alt: "AJ's Cleaning Services FAQ Page",
                label: "FAQ's"
            },
            {
                src: "images/AJS/AjsGallery.png",
                title: "Gallery",
                description: "Developed by a teammate",
                alt: "AJ's Cleaning Services Gallery",
                label: "Gallery"
            }
        ],

        liveUrl: ""
    },

    /* ========================================================== WE HEART LOCAL ====================================================== */

    "We Heart Local": {
        displayTitle: "We Heart Local - Web Application Development",
        status: "Internship Completed - Project Discontinued",

        overview:
            `Developed during a Software Development Internship, this web application project focused on evolving an existing business platform to support greater customization and future feature development. Working independently with the business owner, I contributed to the application's technical direction, database structure, interface design, and core functionality. The project involved transitioning from Wix to Bubble.io and translating business requirements into practical application features.`,

        challenge:
            `The existing Wix platform presented limitations when accommodating the business owner's evolving product vision and desired functionality. The application needed a more flexible development environment, improved database organization, and reliable communication between frontend components and backend data. Another challenge involved balancing evolving design requests and feature ideas with technical feasibility and development priorities.`, 

        contributions: [
            "Evaluated Wix platform limitations and recommended transitioning to Bubble.io to support greater customization and future development.",
            "Migrated the existing web application from Wix to Bubble.io.",
            "Restructured the application's database into organized components to improve data management and frontend/backend interaction.",
            "Designed and implemented backend workflows to manage application logic and connect frontend components with database records.",
            "Developed a promotions management feature with full CRUD functionality.",
            "Implemented workflows allowing clients to create and update promotional discounts.",
            "Integrated database-driven promotion data with frontend components to display discount information to customers in real time.",
            "Applied custom HTML and CSS to support interface customization and branding.",
            "Contributed to UI/UX design decisions, aligning the application's visual presentation with the business owner's vision.",
            "Applied Agile methodology to organize development tasks and adapt to changing project requirements.",
            "Utilized Trello to prioritize tasks, track development progress, and communicate project updates with the client.",
            "Collaborated directly with the business owner to evaluate feature requests and determine practical implementation approaches."
        ],

        technologies: [
            "Bubble.io",
            "Wix",
            "HTML",
            "CSS",
            "Database Design",
            "Database Integration",
            "CRUD Operations",
            "Workflow Logic",
            "Frontend/Backend Integration",
            "UI/UX Design",
            "Agile Methodology",
            "Trello"
        ],

        images: [
            {
                src: "images/WHL/WhlPreviewPic.png",
                title: "Homepage",
                description: "Main homepage showcasing the We Heart Local platform, its purpose, and key features while providing users with an intuitive entry point to explore the application.",
                alt: "We Heart Local homepage displaying the platform's main layout and navigation.",
                label: "Homepage Design"
            },
            {
                src: "images/WHL/WhlEmpower.png",
                title: "Application Concept & Feature Overview",
                description: "Presentation mockup outlining the app's intended functionality, including customer engagement tracking, business analytics, and promotional management.",
                alt: "We Heart Local application concept showing proposed mobile interfaces for customer engagement, analytics, and promotions.",
                label: "Application Concept"
            },
            {
                src: "images/WHL/WhlClientPromoManagement.png",
                title: "Client-Side Promotion Management",
                description: "Promotion creation interface allowing business clients to configure member eligibility, discount types, promotional details, and active date ranges, with a review step before submission.",
                alt: "We Heart Local client-side promotion form with member type, promotion type, start and end dates, promotion details, and submission review.",
                label: "Promotion Management"
            },
            {
                src: "images/WHL/WHLDealsSearch.png",
                title: "Customer Promotions & Deal Search",
                description: "Customer-facing promotions interface featuring keyword search, promotion type filtering, and dynamically displayed discount offers with descriptions, eligibility details, and expiration dates.",
                alt: "We Heart Local customer promotions page displaying searchable and filterable promotional offers from local businesses.",
                label: "Promo Search"
            },
            {
                src: "images/WHL/WhlBenefits.png",
                title: "Business Membership Benefits",
                description: "About page section outlining the platform's value proposition for local businesses, highlighting promotional opportunities, targeted marketing, community engagement, business visibility, and local partnerships.",
                alt: "We Heart Local About page section presenting membership benefits for businesses considering joining the platform.",
                label: "Business Benefits"
            },
            {
                src: "images/WHL/WhlSave10.png",
                title: "Featured Local Business Promotions",
                description: "Homepage feature highlighting participating local businesses offering discounts of 10% or more, helping customers discover current deals and encouraging engagement with local businesses.",
                alt: "We Heart Local homepage displaying participating businesses offering at least 10 percent off, alongside a partnership inquiry form.",
                label: "Featured Promotions"
            }
        ],

        liveUrl: ""
    },

    /* ========================================================== MEMORIES TC ====================================================== */

    "MTC": {
        displayTitle: "MTC - WordPress Website Redesign",
        status: "In Progress - Planning & Development",

        overview:
            `Undertaking a comprehensive redesign of an existing WordPress website for a local business, focusing on improving its visual presentation, information architecture, and overall user experience. The project involves evaluating the existing website, planning revised page structures, developing wireframes, and reorganizing content to create a more intuitive customer journey. Working directly with the client, I am managing the redesign from initial site analysis and UX planning through design, implementation, testing, and ongoing revisions.`,

        challenge:
            `The existing website contained a complex structure that made navigating services, locations, rentals, and other business offerings less intuitive for customers. The booking experience also needed better organization to create a clearer and more streamlined customer journey. The challenge is to restructure the website while preserving important business information, establishing a more logical content hierarchy, and improving usability before moving into full implementation.`,

        contributions: [
            "Evaluated the existing website to identify structural, navigational, and usability improvements.",
            "Planned revised website architecture and developed wireframes to establish page layouts, content hierarchy, and customer navigation.",
            "Redesigned page layouts and visual elements to improve consistency, readability, and overall user experience.",
            "Reorganized service, location, and rental information and refined the booking experience to improve accessibility and customer workflows.",
            "Developed and customized website pages using WordPress and Elementor, incorporating client requirements and feedback",
            "Managed development planning, project priorities, client revisions, functionality testing, and ongoing design refinements throughout the project.",
        ],

        technologies: [
            "WordPress",
            "Elementor",
            "UI/UX Design",
            "HTML",
            "CSS",
            "Responsive Web Design",
            "Branding",
            "Agile"
        ],

        images: [
            {
                src: "images/MTC/MtcHomepageR.png",
                title: "Homepage Hero & Navigation Redesign",
                description: "Introduced a full-width video background to create a more engaging first impression, paired with a redesigned navigation bar that improves access to rentals, tours, locations, media, FAQs, and booking.",
                alt: "Memories TC redesigned homepage featuring an adventure video background, updated navigation bar, and prominent booking calls to action.",
                label: "Homepage Redesign"
            },
            {
                src: "images/MTC/MtcExplore.png",
                title: "Adventure Categories & Trail Navigation",
                description: "Homepage feature organizing rental experiences into four adventure categories, providing customers with a direct path to location pages featuring trail maps specific to their selected vehicle type and other information such as rules, etc.",
                alt: "Memories TC homepage adventure category cards for off-road, water, snow, and road rentals.",
                label: "Adventure Categories"
            },
            {
                src: "images/MTC/MtcRentals.png",
                title: "Rental Catalog & Booking Navigation",
                description: "Redesigned rental catalog featuring category filters, organized vehicle listings, descriptive rental information, and prominent availability and booking links that direct customers to the third-party reservation platform.",
                alt: "Memories TC redesigned rentals page featuring vehicle category filters, rental listings, vehicle descriptions, and booking options.",
                label: "Rental Catalog"
            },
            {
                src: "images/MTC/MtcFooter.png",
                title: "Redesigned Website Footer",
                description: "Restructured footer featuring partner business branding, organized navigation links, rental categories, location information, trail maps, and contact details for improved site navigation.",
                alt: "Redesigned Memories TC website footer displaying partner logos, navigation categories, locations, trail maps, and contact information.",
                label: "Footer Redesign"
            }
        ],

        liveUrl: ""
    } ,

    /* ========================================================== BATTLE FITNESS ====================================================== */

     "Battle Fitness": {
        displayTitle: "Client Project - Website Redesign",
        status: "Live - Ongoing Maintenance",

        overview:
            `Redesigned and developed a fitness facility's website using Wix, establishing its visual identity and creating a more organized, user-friendly online experience. The redesign focused on improving content organization, making class schedules accessible to prospective members, simplifying member account access, and introducing dedicated sections for trainers and staff.`,

        challenge:
            `The existing website lacked an established brand identity and cohesive visual design, with nearly all business information crowded onto a single page. Class schedules were not publicly accessible or connected to a current GymMaster calendar, requiring visitors to create an account before viewing available classes. \n\nExisting members also lacked a clear and convenient way to access account registration, login, and class sign-ups. Additionally, the website provided no dedicated information about staff or individual trainers, their services, or direct contact options, limiting trainer visibility and opportunities to attract prospective personal training clients.`,

        contributions: [
            "Established the business's branding and visual identity through custom frontend design.",
            "Designed and developed the complete website frontend using Wix.",
            "Organized website content into dedicated pages with intuitive navigation.",
            "Embedded the GymMaster class calendar using Wix's HTML Embed element.",
            "Streamlined member registration, login, and class sign-up access.",
            "Developed dedicated trainer and staff profiles with service information and contact options.",
            "Used custom JavaScript to recreate desktop repeater hover effects in Wix's mobile layout."
        ],

        technologies: [
            "Wix",
            "Velo by Wix",
            "UI/UX",
            "Javascript",
            "Third-Party Calendar Embed",
            "UI/UX Design",
            "Responsive Web Design",
            "Branding"
        ],

        images: [
            {
                src: "images/BattleFitness/BFPreviewPic.png",
                title: "Homepage Redesign",
                description: `Custom-designed homepage establishing the gym's brand identity and introducing its services, 
                              membership options, and overall fitness experience.`,
                alt: "Homepage",
                label: "Homepage"
            },
            {
                src: "images/BattleFitness/BFTeam.png",
                title: "Meet Our Team - Desktop",
                description: "Interactive staff repeater featuring hover effects to reveal individual staff information.",
                alt: "Battle Fitness Team About Me Section",
                label: "Team Bios (Desktop)"
            },
            {
                src: "images/BattleFitness/BFMobileTeam.png",
                title: "Meet Our Team - Mobile",
                description: "Custom JavaScript hover-effect alternative displaying staff profiles and bios in a mobile-friendly layout.",
                alt: "Battle Fitness Team About Me Section",
                label: "Team Bios (Mobile)"
            },
            {
                src: "images/BattleFitness/BFMemberships.png",
                title: "Memberships & Pricing",
                description: "Membership options and pricing presented in a clear, organized layout.",
                alt: "Battle Fitness Memberships and Pricing",
                label: "Memberships & Pricing"
            },
            {
                src: "images/BattleFitness/BFClasses.png",
                title: "Class Calendar",
                description: "Embedded GymMaster class calendar providing public access to current class schedules.",
                alt: "Battle Fitness Class Schedule",
                label: "Class Calendar"
            },
            {
                src: "images/BattleFitness/BFTrainers.png",
                title: "Personal Trainer Profiles",
                description: "Interactive trainer profiles featuring detailed information and direct contact options through popup windows.",
                alt: "Battle Fitness Personal Trainers",
                label: "Personal Trainers"
            }
        ],

        liveUrl: "https://www.iambattlefit.com/",
    },

    /* ========================================================== THOMPSON TILE ====================================================== */

     "Thompson Tile": {
        displayTitle: "Thompson Tile - Website Design & Development",
        status: "Live - Ongoing Maintenance",

        overview:
            `Created a simple, professional online presence for Thompson Tile, translating the client's existing branding into a cohesive website. The site highlights available services, showcases completed projects, introduces the business owner, and provides straightforward pathways for prospective customers to initiate inquiries and schedule consultations.`,

        challenge:
            `The business had no existing website or online presence, relying solely onprinted business cards to reach potential customers. The challenge was to establish a professional digital presence while maintaining a simple design that reflected the client's existing branding and made it easy for visitors to explore services, view completed projects, and initiate contact.`,

        contributions: [
            "Translated the client's existing logo and brand colors into a cohesive website design.",
            "Created a clean, professional layout focused on simplicity and usability.",
            "Developed a homepage highlighting services and key business information.",
            "Organized business information into clear, accessible sections.",
            "Designed a project gallery to showcase completed tile work.",
            "Integrated a contact form to streamline customer inquiries.",
            "Implemented prominent 'Get Started' and 'Book a Consultation' calls to action.",
            "Optimized layouts for responsive desktop and mobile viewing."

        ],

        technologies: [
            "Wix",
            "UI/UX",
            "CTA Design",
            "Responsive Design",
        ],

        images: [
            {
                src: "images/ThompsonTile/TTHomepagePic.png",
                title: "Homepage",
                description: `Features a prominent call-to-action, business introduction, 
                              and featured services to help visitors explore offerings and initiate project inquiries.`,
                alt: "Thompson Tile homepage featuring services and a Get Started button.",
                label: "Homepage"
            },
            {
                src: "images/ThompsonTile/TTGallery.png",
                title: "Project Gallery",
                description: "Organized photo gallery showcasing completed tile installations across bathrooms, kitchens, flooring, and custom features.",
                alt: "Thompson Tile project gallery.",
                label: "Project Gallery"
            },
            {
                src: "images/ThompsonTile/TTGallerySlideshow.png",
                title: "Interactive Project Slideshow",
                description: `Implemented a modal slideshow that opens when a gallery 
                              image is selected, allowing visitors to browse additional project photos while 
                              the gallery remains visible in the background.`,
                alt: "Thompson Tile project slideshow modal.",
                label: "Interactive Gallery"
            },
            {
                src: "images/ThompsonTile/TTContactForm.png",
                title: "Contact & Project Inquiries",
                description: `Contact form featuring project inquiry fields and direct 
                              phone contact to make it easy for prospective customers to get in touch.`,
                alt: "Thompson Tile contact form.",
                label: "Contact Form"
            }
        ],

        liveUrl: "https://thompsontile89.wixsite.com/website"
    },

    /* ========================================================== EARTHLY TONES ====================================================== */

     "Earthly Tones": {
        displayTitle: "Earthly Tones - Website Design & Development",
        status: "In Progress - Planning & Development",

        overview: 
            `Earthly Tones is an independently owned bath and body business specializing in handcrafted products made with natural ingredients. The goal was to establish an independent online presence that improves brand visibility and makes its products easier for customers to discover, addressing the limitations of relying solely on Etsy's marketplace search.\n\n The website features a botanical-inspired design, organized product categories, an ingredient information page, and an integrated contact form. Product listings will link directly to the owner's Etsy storefront, providing customers with an accessible path to explore and purchase available products.`,

        challenge:
            `The primary challenge was creating an affordable, easy-to-maintain website for a small business owner without sacrificing functionality, visual presentation, or the customer experience. The solution needed to balance an approachable interface for both customers and the business owner, while allowing room for future product expansion.`,

        contributions: [
            "Designed and developed a cohesive, botanical-inspired website reflecting the brand's natural and handcrafted identity.",
            "Created an intuitive homepage with organized product categories and navigation to improve product discoverability.",
            "Developed an ingredient information page to educate customers about the natural ingredients used throughout the product line.",
            "Implemented an integrated contact form for direct customer inquiries.",
            "Structured a CMS repeater with defined field types to organize product data, including names, descriptions, pricing, ingredients, and usage instructions.",
            "Designed the product management structure to support future catalog expansion and independent content updates."
        ],

        technologies: [
            "Wix",
            "UI/UX Design",
            "CMS Architecture",
            "Responsive Web Design",
            "Branding",
            "Dynamic Content Management",
            "Data Modeling",
            "Third-Party Integration"
        ],

        images: [
            {
                src: "images/EarthlyTones/ETPreviewPic.png",
                title: "Earthly Tones Homepage",
                description: `A botanical-inspired landing page introducing the Earthly Tones brand, 
                              featuring natural product photography, brand messaging, and intuitive navigation.`,
                alt: "Earthly Tones homepage featuring a botanical arrangement, amber candle, and natural bath salts.",
                label: "Homepage"
            },
            {
                src: "images/EarthlyTones/ETCollection.png",
                title: "Product Collection & Categories",
                description: `A categorized product showcase allowing customers to explore the brand's offerings, 
                              including soaps, lotions, bath salts, lip balms, and room sprays.`,
                alt: "Earthly Tones natural collection featuring categorized bath and body products with individual product imagery.",
                label: "Product Collection"
            },
            {
                src: "images/EarthlyTones/ETIngredients.png",
                title: "Natural Ingredients & Benefits",
                description: `An educational page highlighting key botanical ingredients, 
                              their intended skincare benefits, and their role in the brand's natural product formulations.`,
                alt: "Earthly Tones ingredients page showcasing chamomile, lavender, and natural botanical ingredients.",
                label: "Ingredients"
            },
            {
                src: "images/EarthlyTones/ETContact.png",
                title: "Contact & Customer Inquiries",
                description: `An integrated contact section featuring a streamlined form that allows 
                              customers to submit questions, share feedback, and connect directly with the business.`,
                alt: "Earthly Tones contact page featuring botanical product displays and a customer inquiry form.",
                label: "Contact Form"
            }
        ],

        liveUrl: "",
    }
};
//#endregion

//#region************************************************  HELPER FUNCTIONS             ******************************************

function createElement(tag, className, text) {
    const element = document.createElement(tag);

    if (className) {
        element.className = className;
    }

    if (text !== undefined) {
        element.textContent = text;
    }

    return element;
}

function populateTags(container, tags) {
    container.replaceChildren();

    tags.forEach((tag) => {
        container.appendChild(createElement("span", "", tag));
    });
}
//#endregion 

//#region************************************************  PRODUCT DETAILS              ******************************************

function populateDetails(project) {
    modalDetails.replaceChildren();

    const sections = [
        {
            title: "Project Overview",
            icon: "▤",
            text: project.overview
        },
        {
            title: "Challenges",
            icon: "⚙",
            text: project.challenge
        }
    ];

    sections.forEach((section) => {
        const wrapper = createElement(
            "section",
            "modal-detail-section"
        );

        const icon = createElement(
            "div",
            "modal-section-icon",
            section.icon
        );

        icon.setAttribute("aria-hidden", "true");

        const content = createElement("div");
        const heading = createElement("h3", "", section.title);
        const paragraph = createElement("p", "", section.text);

        content.append(heading, paragraph);
        wrapper.append(icon, content);
        modalDetails.appendChild(wrapper);
    });

    const contributionsSection = createElement(
        "section",
        "modal-detail-section"
    );

    const icon = createElement("div", "modal-section-icon", "✓");
    icon.setAttribute("aria-hidden", "true");

    const content = createElement("div");
    const heading = createElement("h3", "", "My Contributions");
    const list = createElement("ul", "modal-contributions");

    project.contributions.forEach((item) => {
        list.appendChild(createElement("li", "", item));
    });

    content.append(heading, list);
    contributionsSection.append(icon, content);
    modalDetails.appendChild(contributionsSection);
}
//#endregion

//#region************************************************  FEATURED IMAGE + THUMBNAILS  ******************************************

function showFeaturedImage(image, activeIndex) {
    featuredImage.src = image.src;
    featuredImage.alt = image.alt;

    imageTitle.textContent = image.title;
    imageDescription.textContent = image.description;

    thumbnails.querySelectorAll(".modal-thumbnail").forEach(
        (button, index) => {
            const active = index === activeIndex;

            button.classList.toggle("active", active);
            button.setAttribute("aria-pressed", String(active));
        }
    );
}

function populateImages(images) {
    thumbnails.replaceChildren();

    if (!images || images.length === 0) {
        featuredImage.removeAttribute("src");
        featuredImage.alt = "";
        imageTitle.textContent = "Screenshots coming soon";
        imageDescription.textContent = "";
        return;
    }

    images.forEach((image, index) => {
        const button = createElement("button", "modal-thumbnail");
        button.type = "button";
        button.dataset.index = index;

        button.setAttribute("aria-pressed", "false");
        button.setAttribute(
            "aria-label",
            `View ${image.label} screenshot`
        );

        const img = createElement("img");
        img.src = image.src;
        img.alt = "";
        img.loading = "lazy";

        const label = createElement("span", "", image.label);

        button.append(img, label);
        thumbnails.appendChild(button);
    });

    showFeaturedImage(images[0], 0);
}
//#endregion

//#region************************************************  OPEN PROJECT MODAL           ******************************************

function openProjectModal(card) {
    lastFocusedElement = card;

    const titleElement = card.querySelector(".project-info h3");
    const descriptionElement = card.querySelector(".project-info p");

    const cardTitle = titleElement?.textContent.trim() || "Project";
    const description = descriptionElement?.textContent.trim() || "";

    const project = projectData[cardTitle];

    modalTitle.textContent = project?.displayTitle || cardTitle;

    //modalDescription.textContent = description;

    if (project) {
        projectStatus.textContent = project.status;

        populateTags(techTags, project.technologies);

        populateDetails(project);
        populateImages(project.images);

        if (project.liveUrl) {
            liveLink.href = project.liveUrl;
            liveLink.hidden = false;
        } else {
            liveLink.removeAttribute("href");
            liveLink.hidden = true;
        }
    } else {
        // Fallback until details are added for other cards.
        const cardTags = card.querySelector(".tags");
        const tags = cardTags
            ? [...cardTags.querySelectorAll("span")].map(
                (tag) => tag.textContent.trim()
            )
            : [];

        populateTags(techTags, tags);

        modalDetails.replaceChildren();
        thumbnails.replaceChildren();

        featuredImage.removeAttribute("src");
        featuredImage.alt = "";
        imageTitle.textContent = "Project details coming soon";
        imageDescription.textContent = "";

        projectStatus.textContent = "Details pending";

        liveLink.removeAttribute("href");
        liveLink.hidden = true;
    }

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
    closeButton.focus();
}
//#endregion

//#region************************************************  CLOSE PROJECT MODAL          *******************************************

function closeProjectModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }
}
//#endregion

//#region************************************************  PROJECT CARD EVENTS            ********************************************


projectCards.forEach((card) => {
    card.addEventListener("click", (event) => {
        event.preventDefault();
        openProjectModal(card);
    });

    // Support keyboard activation when focusing the card itself.
    if (!card.hasAttribute("tabindex")) {
        card.setAttribute("tabindex", "0");
    }

    card.addEventListener("keydown", (event) => {
        if (
            event.target === card &&
            (event.key === "Enter" || event.key === " ")
        ) {
            event.preventDefault();
            openProjectModal(card);
        }
    });
});
//#endregion

//#region************************************************  THUMBNAIL EVENTS             ******************************************

thumbnails.addEventListener("click", (event) => {
    const button = event.target.closest(".modal-thumbnail");

    if (!button) return;

    const activeCardTitle = lastFocusedElement
        ?.querySelector(".project-info h3")
        ?.textContent.trim();

    const project = projectData[activeCardTitle];

    if (!project) return;

    const index = Number(button.dataset.index);
    const image = project.images[index];

    if (image) {
        showFeaturedImage(image, index);
    }
});
//#endregion

//#region************************************************  CLOSE EVENTS                 ******************************************

closeButton.addEventListener("click", closeProjectModal);

closeFooterButton?.addEventListener("click", closeProjectModal);

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeProjectModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (
        event.key === "Escape" &&
        modal.classList.contains("is-open")
    ) {
        closeProjectModal();
    }
});
//#endregion