const calculateDensity = (population, area) => Math.round(population/area);
   
const formatNumber = number => new Intl.NumberFormat("en-Us").format(number);

const contextUtils = {calculateDensity, formatNumber};

export default contextUtils;