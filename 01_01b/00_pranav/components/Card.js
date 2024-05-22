const buildImage = ({
  width,
  height,
  description,
  urls: { full, regular, small },
}) => {
  let srcset = `${full} ${width}w`;
  if (regular) {
    srcset += `, ${regular} 1080w`;
  } else if (small) {
    srcset += `, ${small} 400w`;
  }
  return `
    <img
      srcset="${srcset}"
      sizes="(max-width: 450px) 400px, (max-width: 800) 1080px"
      src="${regular}"
      width="${width}"
      height="${height}"
      alt="${description}"
      loading="lazy"
    />
  `;
};

const getDate = (imgData) => {
  const date = new Date(imgData.created_at);
  return date.toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const Card = (imgData) => {
  const {
    description,
    user: { name },
    created_at: createdDate,
    links: { self },
    license,
    licenseURL,
  } = imgData;

  const markup = `
    <figure class="image">
      ${buildImage(imgData)}
      
      <figcaption class="image__caption">
        <h3 class="image__title">${description}</h3>
        <div class="image__meta">
          <p>
            Photo by
            <span class="image__photog">${name}</span>.
          </p>
          <p>
            Uploaded on <time class="image__date" datetime="${createdDate}">${getDate(
    imgData
  )}</time>
          </p>
          <p>
            <a href="${self}" class="image__link">
              View it on Unsplash.
            </a>
          </p>
          <p>License: <a href="${licenseURL}">${license}</a>.</p>
        </div>
      </figcaption>
    </figure>
  `;
  return markup;
};

export default Card;
