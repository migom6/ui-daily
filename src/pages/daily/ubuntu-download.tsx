import { FC } from "react";
import styles from "../../styles/Ubuntu-download.module.css";

const config: Record<string, Props> = {
  desktop: {
    title: "Ubuntu Deskop",
    description:
      "Download Ubuntu desktop and replace your current operating system or run alongside it.",
    ctaTitle: "Download v 20.04",
    versions: ["Download earlier version"],
  },
  server: {
    title: "Ubuntu Server",
    description:
      "Download Ubuntu desktop and replace your current operating system or run alongside it.",
    ctaTitle: "Get Ubuntu Server",
    versions: ["Mac and Windows", "ARM", "IBM"],
  },
};

const index = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Download</h1>
          <p className={styles.subtitle}>
            Secure your open source apps. Patch the full stack, from kernel to
            library and applications, for CVE compliance.
          </p>
        </section>
        <section className={styles.versions}>
          <DownloadByPlatform {...config["desktop"]} />
          <DownloadByPlatform {...config["server"]} />
        </section>
      </div>
    </div>
  );
};

interface Props {
  title: string;
  description: string;
  ctaTitle: string;
  versions: string[];
}

const DownloadByPlatform: FC<Props> = ({
  title,
  description,
  ctaTitle,
  versions,
}) => {
  return (
    <div className={styles.download_container}>
      <h2 className={styles.category_title}>{title}</h2>
      <p className={styles.category_subtitle}>{description}</p>
      <button className={styles.download}>{ctaTitle}</button>
      <ul className={styles.links}>
        {versions.map((item) => (
          <li className={styles.link} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default index;
