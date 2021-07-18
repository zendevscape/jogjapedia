const createCategoryItem = (category) => {
  return `
    <a class="category__item" href="/#/category/${category.id}">
      <img data-src="/assets/img/icons/${category.id}.png"
        width="100px"
        height="100px"
        class="lazyload"
        alt="${category.name}">
      <h2>${category.name}</h2>
    </a>`;
};

const createItem = (catId, item) => {
  return `
  <a class="item__node" href="/#/${catId}/${item.id}">
    <img data-src="${item.picture.link ||
      'https://picsum.photos/id/666/700/400?grayscale'}"
      height="200"
      class="lazyload"
      alt="${item.name}">
    <p>${item.picture.license}</p>
    <div class="node__details">
      <h3>${item.name}</h3>
      <div class="node__description">
        ${item.description}
      </div>
    </div>
  </a>
  `;
};

const createDetailsWithMarket = (item) => {
  let itemMarket = '';
  let firstMarket = true;
  item.market.forEach((market) => {
    itemMarket += '<div class="market__item';
    if (firstMarket) {
      itemMarket += ' notopmargin';
    }
    itemMarket += `">
        <div class="market__identity">
          <h3>${market.name}</h3>
          <p>${market.location}</p>
        </div>
        <iframe class="market__map"
          src="${market.map}"
          width="400" height="250" allowfullscreen="" loading="lazy">
        </iframe>
      </div>`;
    firstMarket = false;
  });
  return `
    <div class="content-wrapper">
      <section class="image">
        <a href="${item.picture.link}" class="glightbox" data-glightbox="title: ${item.name}; description: ${item.picture.license};">
          <img data-src="${item.picture.link}"
            class="lazyload"
            alt="${item.name}">
          <p>${item.picture.license}</p>
        </a>
      </section>
      <section class="entity">
        <div class="section-wrapper" tabindex="0">
          <h1>${item.name}</h1>
          <div class="entity__tag">
            <span><i class="material-icons">sell</i>${item.price}</span>
          </div>
        </div>
      </section>
      <section class="details">
        <div class="section-wrapper" tabindex="0">
          <h2 class="notopmargin">Kategori</h2>
          <p class="details__category">${item.category}</p>
          <h2>Deskripsi</h2>
          ${item.description}
        </div>
      </section>
      <section class="market">
        <div class="section-wrapper" tabindex="0">
          <h2 class="notopmargin">Lapak Favorit</h2>
          <div class="market-wrapper">
            ${itemMarket}
          </div>
        </div>
      </section>
    </div>`;
};

const createDetailsWithReview = (item) => {
  let itemReview = '';
  let firstReview = true;
  item.review.forEach((review) => {
    itemReview += '<div class="review__item';
    if (firstReview) {
      itemReview += ' notopmargin';
    }
    itemReview += `">
        <div class="review__identity">
          <h3>${review.name}</h3>
        </div>
        <p class="review__text">${review.text}</p>
      </div>`;
    firstReview = false;
  });
  return `
    <div class="content-wrapper">
      <section class="image">
        <a href="${item.picture.link}" class="glightbox" data-glightbox="title: ${item.name}; description: ${item.picture.license};">
          <img data-src="${item.picture.link}"
            class="lazyload"
            alt="${item.name}">
          <p>${item.picture.license}</p>
        </a>
      </section>
      <section class="entity">
        <div class="section-wrapper" tabindex="0">
          <h1>${item.name}</h1>
          <div class="entity__tag">
            <span><i class="material-icons">star</i>${item.rating}</span>
          </div>
        </div>
      </section>
      <section class="details">
        <div class="section-wrapper" tabindex="0">
          <h2 class="notopmargin">Kategori</h2>
          <p class="details__category">${item.category}</p>
          <h2>Deskripsi</h2>
          ${item.description}
          <h2>Lokasi</h2>
          <p>${item.location}</p>
          <iframe class="details__map"
            src="${item.map}"
            width="400" height="250" allowfullscreen="" loading="lazy">
          </iframe>
        </div>
      </section>
      <section class="review">
        <div class="section-wrapper" tabindex="0">
          <h2 class="notopmargin">Ulasan</h2>
          <div class="review-wrapper">
            ${itemReview}
          </div>
        </div>
      </section>
    </div>`;
};

export {
  createCategoryItem,
  createItem,
  createDetailsWithMarket,
  createDetailsWithReview,
};
