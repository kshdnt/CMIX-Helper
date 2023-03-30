import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Easy to Use',
        Svg: require('@site/static/img/undraw_building_blocks.svg').default,
        description: (
            <>
                With CMIX Helper, optimizing and streamlining your data aggregation and survey programming processes has never been easier. Our intuitive UI is designed to be user-friendly, even for those new to automation software.
            </>
        ),
    },
    {
        title: 'Size doesn\'t Matter',
        Svg: require('@site/static/img/undraw_projections.svg').default,
        description: (
            <>
                CMIX Helper is designed to handle even the largest datasets. With CMIX Helper, you can process and analyze your data efficiently and effectively, no matter the size of the dataset.
            </>
        ),
    },
    {
        title: 'Reliable and Repeatable',
        Svg: require('@site/static/img/undraw_search.svg').default,
        description: (
            <>
                Our automation suite ensures that your processes are performed accurately and consistently every time. This eliminates the need for manual checks and ensures that you get consistent results every time.
            </>
        ),
    },
];

function Feature({ Svg, title, description }) {
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
