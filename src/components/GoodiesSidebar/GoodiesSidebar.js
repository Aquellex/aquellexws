import * as React from 'react';
import { Link } from 'gatsby';

import * as styles from './GoodiesSidebar.module.css';

const GoodiesSidebar = () => (
  <div className={styles.goodiesSidebar}>
    <div className={styles.goodiesSidebarTitle}>
      <h3>DOCUMENTS</h3>
    </div>
    <div className={styles.goodiesSidebarContent}>
      <ul>
        <li>
          <Link to="https://psgcabal.github.io/gbsoundcomparison">
            Game Boy comparison (better than Herbert Weixelbaum’s version)
          </Link>
        </li>
        <li>
          <Link to="/goodies/tutorial/famitracker-dubstep">
            FamiTracker dubstep tutorial by Dimeback
          </Link>
        </li>
        <li>
          <Link to="/goodies/the-spirit-engine-game-mechanics">
            The Spirit Engine 1 game mechanics
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default GoodiesSidebar;
