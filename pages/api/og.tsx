import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

interface BannerImage {
  url: string;
  position: string;
}

const HEIGHT = 630;
const WIDTH = 1200;

const bannerImages: Record<string, BannerImage> = {
  react: {
    url: "https://nextsoftware.io/files/images/logos/main/reactjs-logo.png",
    position: "-200px",
  },
  javascript: {
    url: "https://assets.stickpng.com/images/613b64fe30e8530004ba3a03.png",
    position: "-90px",
  },
};

const getBannerImage = (tags: string): BannerImage | undefined => {
  if (!tags) return undefined;

  const tag = tags.split(",")[0];

  return bannerImages[tag.toLowerCase()];
};

export default function handler(req) {
  const { searchParams } = new URL(req.url);

  const title = searchParams.get("title") ?? "undefined";
  const description = searchParams.get("description");
  const tags = searchParams.get("tags");

  const bannerImage = getBannerImage(tags);

  return new ImageResponse(
    (
      <div
        style={{
          height: `${HEIGHT}px`,
          width: `${WIDTH}px`,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#0e141b",
          color: "#ffffff",
          padding: "40px",
        }}
      >
        {bannerImage && (
          <div
            style={{
              position: "absolute",
              top: bannerImage.position,
              right: bannerImage.position,
              display: "flex",
            }}
          >
            <img src={bannerImage.url} />
          </div>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
          }}
        >
          <p
            style={{
              fontSize: "64px",
              color: "#ffe100",
              margin: 0,
            }}
          >
            {title}
          </p>
          {description && (
            <p
              style={{
                fontSize: "32px",
                color: "#bd93f9",
                margin: 0,
              }}
            >
              {description}
            </p>
          )}
        </div>
        <div
          style={{
            color: "#ff5555",
            position: "absolute",
            bottom: "20px",
            right: "20px",
            fontSize: "28px",
            display: "flex",
          }}
        >
          <span>maddhruv.dev</span>
        </div>
      </div>
    ),
    {
      width: WIDTH,
      height: HEIGHT,
    }
  );
}
