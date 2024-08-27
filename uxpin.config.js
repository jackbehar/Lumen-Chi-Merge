module.exports = {
  components: {
    categories: [
      {
        name: "UXPIN ADDED",
        include: [
          "src/components/_uxPin/Button/Button.jsx",

          // "src/components/_uxPin/ExpansionPanelGroup/ExpansionPanelGroup.jsx",
          // "src/components/_uxPin/ExpansionPanel/ExpansionPanel.jsx",
          // "src/components/_uxPin/Alert/Alert.jsx",
          // "src/components/_uxPin/Button/Button.jsx",
          // "src/components/_uxPin/Card/Card.jsx",
          // "src/components/_uxPin/AccordionData/AccordionData.jsx",
          // "src/components/_uxPin/AccordionChildren/AccordionChildren.jsx",
          // "src/components/_uxPin/AccordionItem/AccordionItem.jsx",
          // "src/components/_uxPin/Header/Header.jsx",
          // "src/components/_uxPin/Carousel/Carousel.jsx",
          // "src/components/_uxPin/ButtonGroup/ButtonGroup.jsx",
          // "src/components/_uxPin/Modal/Modal.jsx",
        ],
      },
    ],
    wrapper: "src/components/UXPinWrapper/UXPinWrapper.js",
    webpackConfig: "uxpin.webpack.config.js",
  },
  name: "Example Design System",
};
