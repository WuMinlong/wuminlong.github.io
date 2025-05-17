import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '开发工具',
    Svg: require('@site/static/img/tools.svg').default,
    description: (
      <>
      <div style={{ fontWeight: 'bold', color: '#28a745' }}>Git</div>
      <div style={{ fontWeight: 'bold', color: '#28a745' }}>Markdown</div>
      <div style={{ fontWeight: 'bold', color: '#28a745' }}>Visual Studio Code</div>
      </>
    ),
  },
  {
    title: '编程语言',
    Svg: require('@site/static/img/program.svg').default,
    description: (
      <>
      <div style={{ fontWeight: 'bold', color: '#ffc107' }}>C</div>
      <div style={{ fontWeight: 'bold', color: '#ffc107' }}>C++</div>
      <div style={{ fontWeight: 'bold', color: '#ffc107' }}>Python</div>
      </>
    ),
  },
  {
    title: '嵌入式开发',
    Svg: require('@site/static/img/embdev.svg').default,
    description: (
      <>
      <div style={{ fontWeight: 'bold', color: '#17a2b8' }}>SoC</div>
      <div style={{ fontWeight: 'bold', color: '#17a2b8' }}>ESP32</div>
      <div style={{ fontWeight: 'bold', color: '#17a2b8' }}>STM32</div>
      </>
    ),
  },
  {
    title: '机器人操作系统',
    Svg: require('@site/static/img/robot.svg').default,
    description: (
      <>
      <div style={{ fontWeight: 'bold', color: '#17a2b8' }}>ROS1</div>
      <div style={{ fontWeight: 'bold', color: '#17a2b8' }}>ROS2</div>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
