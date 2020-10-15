
interface widgetButtonsInterface {
    chatButton?: string,
    contactButton?: string,
}

export interface widgetButtonsCollapsedInterface extends widgetButtonsInterface {
    showMoreButton?: string
}

export interface widgetButtonsExpandedInterface extends widgetButtonsInterface {
    showLessButton?: string
}

export interface sendMessageFormInterface {
    // Send Message
    title: string,
    // To send your message, please provide a few more details or sign in to your Rentgrata account below.
    authInfoMessage: string,
    // Please type your message below.
    errorEmptyMessage: string,
    // You must enter your first name.
    errorMustEnterFirstName: string,
    errorMustEnterLastName: string,
    errorLasNameCanNotBeBlank: string,
    errorFirstNameCanNotBeBlank: string,
    errorMustEnterEmail: string,
    errorEmailInvalid: string,
    errorEmailExists: string,

    firstNameField: "First name"
    lastNameField: "Last name"
    emailField: "Email"
}

export interface widgetIconsInterface {
    scheduleATour: string,
    virtualTour: string,
    contactProperty: string
}