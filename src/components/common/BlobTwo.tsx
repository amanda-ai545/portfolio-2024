import { FC } from 'react';

type Props = {
  className?: string;
  color?: string;
};

export const BlobTwo: FC<Props> = ({ className = ``, color = `#9fddf9` }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3500 2500"
      className={`
        blob__content-two

        ${className}
      `}
    >
      <g>
        <path
          style={{ opacity: 0.5 }}
          fill={color}
          d="M 1556.5,-0.5 C 1573.5,-0.5 1590.5,-0.5 1607.5,-0.5C 1689.28,4.77733 1767.95,23.6107 1843.5,56C 1893.11,76.97 1941.11,100.803 1987.5,127.5C 1808.57,114.053 1629.57,101.553 1450.5,90C 1386.82,86.5161 1323.15,86.6828 1259.5,90.5C 1351.07,36.2003 1450.07,5.86698 1556.5,-0.5 Z"
        />
      </g>
      <g>
        <path
          style={{ opacity: 1 }}
          fill={color}
          d="M 1987.5,127.5 C 2053.42,130.521 2119.08,136.354 2184.5,145C 2234.35,151.842 2282.35,165.175 2328.5,185C 2383.13,209.965 2429.29,245.798 2467,292.5C 2503.88,341.659 2520.05,396.993 2515.5,458.5C 2513.08,495.734 2509.91,533.067 2506,570.5C 2498.27,640.261 2514.61,703.595 2555,760.5C 2575.3,787.811 2598.14,812.978 2623.5,836C 2639.21,850.041 2655.21,863.708 2671.5,877C 2720.14,913.496 2767.48,951.662 2813.5,991.5C 2914.8,1081.43 2972.14,1194.1 2985.5,1329.5C 2985.5,1346.17 2985.5,1362.83 2985.5,1379.5C 2974.39,1503.4 2921.39,1605.06 2826.5,1684.5C 2779.38,1720.41 2727.71,1748.57 2671.5,1769C 2606.34,1791.96 2539.67,1809.29 2471.5,1821C 2390.63,1833.84 2309.63,1845.84 2228.5,1857C 2095.39,1874.89 1967.72,1911.55 1845.5,1967C 1800.37,1988.05 1757.04,2011.89 1715.5,2038.5C 1687.67,2056.58 1660.34,2075.42 1633.5,2095C 1583.88,2132.95 1534.55,2171.28 1485.5,2210C 1430.98,2252.85 1373.98,2292.18 1314.5,2328C 1195.16,2395.79 1068.5,2445.12 934.5,2476C 878.647,2488.19 822.313,2495.36 765.5,2497.5C 755.167,2497.5 744.833,2497.5 734.5,2497.5C 578.934,2490.96 450.1,2429.29 348,2312.5C 263.278,2212.88 221.112,2097.21 221.5,1965.5C 221.289,1945.75 222.289,1926.09 224.5,1906.5C 236.183,1798.95 270.683,1699.29 328,1607.5C 350.193,1573.11 373.859,1539.78 399,1507.5C 440.638,1457.2 479.971,1405.2 517,1351.5C 546.654,1306.86 569.321,1258.86 585,1207.5C 595.432,1167.14 601.765,1126.14 604,1084.5C 605.113,998.836 605.613,913.17 605.5,827.5C 608.878,728.898 626.378,632.898 658,539.5C 702.787,410.353 778.62,303.52 885.5,219C 974.887,152.513 1075.22,112.18 1186.5,98C 1210.74,94.5106 1235.07,92.0106 1259.5,90.5C 1323.15,86.6828 1386.82,86.5161 1450.5,90C 1629.57,101.553 1808.57,114.053 1987.5,127.5 Z"
        />
      </g>
      <g>
        <path
          style={{ opacity: 0.5 }}
          fill={color}
          d="M 2515.5,458.5 C 2514.99,462.007 2515.66,465.174 2517.5,468C 2568.6,500.436 2618.6,534.436 2667.5,570C 2711.04,602.539 2748.87,640.706 2781,684.5C 2810.31,727.065 2830.31,773.732 2841,824.5C 2849.35,867.34 2846.35,909.34 2832,950.5C 2826.37,964.426 2820.2,978.092 2813.5,991.5C 2767.48,951.662 2720.14,913.496 2671.5,877C 2655.21,863.708 2639.21,850.041 2623.5,836C 2598.14,812.978 2575.3,787.811 2555,760.5C 2514.61,703.595 2498.27,640.261 2506,570.5C 2509.91,533.067 2513.08,495.734 2515.5,458.5 Z"
        />
      </g>
      <g>
        <path
          style={{ opacity: 0.5 }}
          fill={color}
          d="M 605.5,827.5 C 605.613,913.17 605.113,998.836 604,1084.5C 601.765,1126.14 595.432,1167.14 585,1207.5C 569.321,1258.86 546.654,1306.86 517,1351.5C 479.971,1405.2 440.638,1457.2 399,1507.5C 373.859,1539.78 350.193,1573.11 328,1607.5C 270.683,1699.29 236.183,1798.95 224.5,1906.5C 224.714,1904.86 224.38,1903.36 223.5,1902C 139.783,1843.27 78.6161,1766.43 40,1671.5C 14.6291,1608.14 1.12911,1542.48 -0.5,1474.5C -0.5,1470.17 -0.5,1465.83 -0.5,1461.5C 2.83486,1360.33 31.6682,1266.99 86,1181.5C 153.988,1078.5 242.488,998.337 351.5,941C 412.107,911.195 473.774,883.861 536.5,859C 559.651,848.785 582.651,838.285 605.5,827.5 Z"
        />
      </g>
      <g>
        <path
          style={{ opacity: 0.5 }}
          fill={color}
          d="M 2826.5,1684.5 C 2847.79,1783.19 2839.96,1879.53 2803,1973.5C 2756.71,2080.45 2679.88,2156.62 2572.5,2202C 2501.31,2229.77 2427.64,2239.77 2351.5,2232C 2334.8,2230.42 2318.13,2228.59 2301.5,2226.5C 2297.56,2200.44 2285.22,2179.28 2264.5,2163C 2234.72,2145.6 2211.88,2152.1 2196,2182.5C 2193.71,2188.66 2192.21,2194.99 2191.5,2201.5C 2155.84,2191.45 2120.5,2180.28 2085.5,2168C 2001.91,2136.47 1918.24,2105.14 1834.5,2074C 1795.43,2060.03 1755.76,2048.2 1715.5,2038.5C 1757.04,2011.89 1800.37,1988.05 1845.5,1967C 1967.72,1911.55 2095.39,1874.89 2228.5,1857C 2309.63,1845.84 2390.63,1833.84 2471.5,1821C 2539.67,1809.29 2606.34,1791.96 2671.5,1769C 2727.71,1748.57 2779.38,1720.41 2826.5,1684.5 Z"
        />
      </g>
      <g>
        <path
          style={{ opacity: 0.997 }}
          fill={color}
          d="M 2301.5,2226.5 C 2305.86,2249.88 2300.2,2270.38 2284.5,2288C 2265.98,2300.56 2247.31,2300.56 2228.5,2288C 2201.11,2265.68 2188.78,2236.85 2191.5,2201.5C 2192.21,2194.99 2193.71,2188.66 2196,2182.5C 2211.88,2152.1 2234.72,2145.6 2264.5,2163C 2285.22,2179.28 2297.56,2200.44 2301.5,2226.5 Z"
        />
      </g>
      <g>
        <path
          style={{ opacity: 0.993 }}
          fill={color}
          d="M 1801.5,2265.5 C 1817.92,2264.94 1833.25,2268.77 1847.5,2277C 1859.24,2284.4 1871.24,2291.4 1883.5,2298C 1909.53,2308.51 1933.87,2321.84 1956.5,2338C 1989.4,2366.8 1994.56,2399.97 1972,2437.5C 1940.28,2479.07 1899.44,2491.91 1849.5,2476C 1806.77,2457.73 1778.94,2426.23 1766,2381.5C 1758.39,2357.81 1757.06,2333.81 1762,2309.5C 1765.84,2294.96 1773.34,2282.8 1784.5,2273C 1789.78,2269.35 1795.45,2266.85 1801.5,2265.5 Z"
        />
      </g>
    </svg>
  );
};
