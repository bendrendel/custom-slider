const range = document.getElementById('range');

range.value = '50';

range.addEventListener('input', e => {
    const value = +e.target.value;
    const label = e.target.nextElementSibling;

    const rangeWidth = getComputedStyle(e.target).getPropertyValue('width');
    const labelWidth = getComputedStyle(label).getPropertyValue('width');

    const numRangeWidth = +rangeWidth.substring(0, rangeWidth.length - 2);
    const numLabelWidth = +labelWidth.substring(0, labelWidth.length - 2);

    const max = +e.target.max;
    const min = +e.target.min;

    const left = 12 + ((numRangeWidth - 24) * (value / max)) - (numLabelWidth / 2);

    label.style.left = `${left}px`;

    label.innerHTML = value;
});
