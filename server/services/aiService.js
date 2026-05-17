const summarizeText = async (text) => {

  try {

    return `Summary: ${text.substring(0, 40)}...`;

  } catch (error) {

    return 'Summary Failed';

  }

};

module.exports = {
  summarizeText
};