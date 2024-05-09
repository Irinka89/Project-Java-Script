import { eventsStore } from "./js/data.js"
import { createEventElement, renderEvents, eventsBox, formatDate } from "./js/utils.js"

renderEvents(eventsStore)

const distanceSelect = document.getElementById('distance-select')
const typeSelect = document.getElementById('type-select')
const categorySelect = document.getElementById('category-select')

distanceSelect.addEventListener('change', handleFiltersChange);
typeSelect.addEventListener('change', handleFiltersChange);
categorySelect.addEventListener('change', handleFiltersChange);

handleFiltersChange();

function handleFiltersChange() {
  const distanceValue = Number(distanceSelect.value);
  const typeValue = typeSelect.value;
  const categoryValue = categorySelect.value;

  const filteredData = eventsStore.filter((event) => {
    const matchDistance = isNaN(distanceValue) || event.distance === distanceValue;
    const matchType = typeValue === 'any' || event.type === typeValue;
    const matchCategory = categoryValue === 'any' || event.category === categoryValue;

    return matchDistance && matchType && matchCategory;
  });

  renderEvents(filteredData);
}
