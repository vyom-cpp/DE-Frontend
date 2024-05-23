document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const generated = parseInt(card.getAttribute('data-generated'));
        const scanned = parseInt(card.getAttribute('data-scanned'));
        const percentage = Math.round((scanned / generated) * 100);

        card.querySelector('.progress-circle').setAttribute('data-progress', percentage);

        const angle = (percentage / 100) * 360;

        if (percentage > 50) {
            const mask = document.createElement('div');
            mask.className = 'mask full';
            const fill = document.createElement('div');
            fill.className = 'fill';
            mask.appendChild(fill);
            card.querySelector('.progress-circle').appendChild(mask);

            const maskFix = document.createElement('div');
            maskFix.className = 'mask';
            const fillFix = document.createElement('div');
            fillFix.className = 'fill fix';
            maskFix.appendChild(fillFix);
            card.querySelector('.progress-circle').appendChild(maskFix);
        }

        const mask = document.createElement('div');
        mask.className = 'mask';
        const fill = document.createElement('div');
        fill.className = 'fill';
        mask.appendChild(fill);
        card.querySelector('.progress-circle').appendChild(mask);

        mask.querySelector('.fill').style.transform = `rotate(${angle}deg)`;

        // Update the displayed scanned and generated counts
        card.querySelector('.scanned').textContent = scanned;
        card.querySelector('.generated').textContent = generated;
    });
});