import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Breaking "Needing Experience to Get Experience"',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        We aim to break the circular logic of needing experience to get experience by
        fostering a judgement-free, educational environment that prioritizes the learning experience.
      </>
    ),
  },
  {
    title: 'Student-Driven Programming Projects',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We organize members into programming projects teams to provide an internship-like experience
        for our participating club members.
      </>
    ),
  },
  {
    title: 'Diversify Tech from the Ground-Up',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        No major/experience requirements! We provide software development opportunities to all
        majors & backgrounds to lower the barrier to gaining CS experience and promote diversity in Tech.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
