const generateEmail = ({ name, token }) => {
    const element = '<div dir="ltr">' +
        `<p>Dear ${name}</p>` +
        '<p>Please use the verification code to verify your signup on TLY</p>' +
        `<p><b>${token}</b></p>` +
        '<p>Thanks</p>' +
        '</div>';
    return element;
};

module.exports = {
    generateEmail,
};
