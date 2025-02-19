
export interface ExchangeDetails {
  code: string;
  name: string;
}

export interface SymbolDetails {
  code: string;
  name: string;
}

export const APP_CONSTS = {
  TITLE: 'Road To FIRE',
  VERSION: '1.3.0',
  // text to show when user first loads the current new version
  WHATS_NEW_TITLE: `What's new in version 1.3.0`,
  WHATS_NEW:
    `Features:
* Added support for dark theme`,
  REPOSITORY_URL: 'https://github.com/iLiviu/road-to-fire',
  STORAGE_API_KEYS: {
    DROPBOX: 'kbwh5504okeu3b9',
    GOOGLE_DRIVE: '801129580490-kbquipjice5v26b5jtpmhnncs31li7pv.apps.googleusercontent.com',
  },
  LONG_DATE_FORMAT: 'L',
  QUOTE_CACHE_TIMEOUT: 60 * 60 * 11, // value in seconds. do not request updated quotes for assets until timeout
  QUOTE_SERVICE_BASE_URL: 'https://roadtofire.iliviu.me:8443/',
  SUPPORTED_EXCHANGES: {
    EQUITY: <ExchangeDetails[]>[
      { code: 'ARCX', name: 'NYSE Arca' },
      { code: 'BATS', name: 'CBOE BZX ' },
      { code: 'BATY', name: 'CBOE BYX' },
      { code: 'EDGA', name: 'CBOE EDGA' },
      { code: 'EDGX', name: 'CBOE EDGX' },
      { code: 'IEXG', name: 'IEX Market' },
      { code: 'XASE', name: 'NYSE American' },
      { code: 'XBOS', name: 'NASDAQ BX' },
      { code: 'XCHI', name: 'Chicago Stock Exchange' },
      { code: 'XCIS', name: 'NYSE National' },
      { code: 'XNAS', name: 'NASDAQ All Markets' },
      { code: 'XNGS', name: 'NASDAQ' },
      { code: 'XNYS', name: 'New York Stock Exchange,' },
      { code: 'XPHL', name: 'NASDAQ PSX' },
      { code: 'AERO', name: 'Piata AeRO, Bursa de Valori Bucuresti' }, // non valid MIC
      { code: 'XAMS', name: 'Euronext Amsterdam' },
      { code: 'XASX', name: 'Australian Securities Exchange' },
      { code: 'XATH', name: 'Athens Exchange' },
      { code: 'XBRU', name: 'Euronext Brussels' },
      { code: 'XCSE', name: 'NASDAQ OMX Copenhagen' },
      { code: 'XHKG', name: 'Hong Kong Exchanges' },
      { code: 'XHEL', name: 'NASDAQ OMX Helsinki' },
      { code: 'XDUB', name: 'Irish Stock Exchange' },
      { code: 'XBSE', name: 'Bursa de Valori Bucuresti' },
      { code: 'XETR', name: 'Deutsche Boerse / Boerse Frankfurt' },
      { code: 'XLON', name: 'London Stock Exchange' },
      { code: 'XSTU', name: 'Boerse Stuttgart' },
      { code: 'XJSE', name: 'Johannesburg Stock Exchange' },
      { code: 'XLIS', name: 'Euronext Lisbon' },
      { code: 'XMIL', name: 'Borsa Italiana/Milan Stock Exchange' },
      { code: 'XOSL', name: 'Oslo Børs/Oslo Stock Exchange' },
      { code: 'XPAR', name: 'Euronext Paris' },
      { code: 'XPRA', name: 'Prague Stock Exchange' },
      { code: 'XSES', name: 'Singapore Exchange' },
      { code: 'XSSC', name: 'Shanghai-Hong Kong Stock Connect' },
      { code: 'XSEC', name: 'Shenzhen-Hong Kong Stock Connect' },
      { code: 'XMCE', name: 'BME Spanish Exchanges' },
      { code: 'XOME', name: 'NASDAQ OMX Stockholm' },
      { code: 'XSWX', name: 'SIX Swiss Exchange' },
      { code: 'XTSE', name: 'Toronto Stock Exchange' },
      { code: 'XTSX', name: 'TSX Venture Exchange' },
      { code: 'XTKS', name: 'Tokyo Stock Exchange' },
      { code: 'XWBO', name: 'Wiener Börse/Vienna Stock Exchange' },
      { code: 'XVTX', name: 'SIX Swiss Exchange (Blue-Chip)' },
      { code: 'XWAR', name: 'Warsaw Stock Exchange' },
      { code: 'XMUN', name: 'Boerse Muenchen' },
      { code: 'XCBT', name: 'Chicago Board of Trade' },
      { code: 'XCME', name: 'Chicago Mercantile Exchange' },
      { code: 'IFUS', name: 'ICE Futures US' },
      { code: 'XNYM', name: 'New York Mercantile Exchange' },
      { code: 'XBUE', name: 'Bolsa De Comercio De Buenos Aires' },
      { code: 'BVMF', name: 'Bolsa De Valores, Mercadorias E Futuros Brasil' },
      { code: 'XCNQ', name: 'Canadian National Stock Exchange' },
      { code: 'NEOE', name: 'Neo Exchange' },
      { code: 'XSGO', name: 'Santiago Stock Exchange' },
      { code: 'XCAI', name: 'Egyptian Exchange' },
      { code: 'XTAL', name: 'Nasdaq Tallinn' },
      { code: 'XBER', name: 'Boerse Berlin' },
      { code: 'XHAM', name: 'Hanseatische Wertpapierboerse' },
      { code: 'XHAN', name: 'Niedersaechsische Boerse Zu Hannover' },
      { code: 'XDUS', name: 'Boerse Duesseldorf - Quotrix' },
      { code: 'XFRA', name: 'Boerse Frankfurt' },
      { code: 'XBUD', name: 'Budapest Stock Exchange' },
      { code: 'XICE', name: 'Nasdaq OMX Iceland' },
      { code: 'XBOM', name: 'Bombay Stock Exchange' },
      { code: 'XNSE', name: 'National Stock Exchange Of India' },
      { code: 'XIDX', name: 'Indonesia Stock Exchange' },
      { code: 'XTAE', name: 'Tel Aviv Stock Exchange' },
      { code: 'ETLX', name: 'EuroTLX' },
      { code: 'XRIS', name: 'Nasdaq OMX Riga' },
      { code: 'NASB', name: 'Nasdaq OMX Baltic' },
      { code: 'XKLS', name: 'Malaysian Stock Exchange' },
      { code: 'BIVA', name: 'Bolsa Institucional De Valores' },
      { code: 'XNZE', name: 'New Zealand Stock Exchange' },
      { code: 'DSMD', name: 'Qatar Stock Exchange	' },
      { code: 'MISX', name: 'Moscow Exchange' },
      { code: 'XKRX', name: 'Korea Stock Exchange' },
      { code: 'XKOS', name: 'Korea Exchange (Kosdaq)' },
      { code: 'XMAD', name: 'Bolsa De Madrid' },
      { code: 'XSAU', name: 'Saudi Stock Exchange' },
      { code: 'XTAI', name: 'Taiwan Stock Exchange' },
      { code: 'XBKK', name: 'Stock Exchange of Thailand' },
      { code: 'XIST', name: 'Borsa İstanbul' },
      { code: 'BVCA', name: 'Caracas Stock Exchange' },
    ]
      .sort((item1, item2) => item1.name.localeCompare(item2.name)),
    CRYPTO: <ExchangeDetails[]>[
      { code: 'BINANCE', name: 'Binance Exchange' },
      { code: 'COINBASE', name: 'Coinbase Exchange' },
    ],
    COMMODITY: <ExchangeDetails[]>[
      { code: 'CBOE', name: 'CBOE Futures Exchange' },
    ]
  },
  SUGGESTED_SYMBOLS: {
    EQUITY: <SymbolDetails[]>[],
    CRYPTO: <SymbolDetails[]>[],
    COMMODITY: <SymbolDetails[]>[
      { code: 'AL', name: 'Aluminium' },
      { code: 'AU', name: 'Gold' },
      { code: 'PT', name: 'Platinum' },
      { code: 'AG', name: 'Silver' },
      { code: 'CU', name: 'Copper' },
      { code: 'PD', name: 'Palladium' },
      { code: 'ZC', name: 'Corn' },
      { code: 'ZS', name: 'Soybean' },
      { code: 'LE', name: 'Live Cattle' },
      { code: 'ZW', name: 'Wheat' },
      { code: 'CL', name: 'Crude Oil' },
      { code: 'BZ', name: 'Brent Oil' },
      { code: 'RB', name: 'Gasoline' },
      { code: 'NG', name: 'Natural Gas' },
    ],
  },
  CURRENCY_CODES: [{ code: 'USD', name: 'US Dollar' }, { code: 'CAD', name: 'Canadian Dollar' }, { code: 'EUR', name: 'Euro' },
  { code: 'AED', name: 'United Arab Emirates Dirham' }, { code: 'AFN', name: 'Afghan Afghani' }, { code: 'ALL', name: 'Albanian Lek' },
  { code: 'AMD', name: 'Armenian Dram' }, { code: 'ARS', name: 'Argentine Peso' }, { code: 'AUD', name: 'Australian Dollar' },
  { code: 'AZN', name: 'Azerbaijani Manat' }, { code: 'BAM', name: 'Bosnia-Herzegovina Convertible Mark' },
  { code: 'BDT', name: 'Bangladeshi Taka' }, { code: 'BGN', name: 'Bulgarian Lev' }, { code: 'BHD', name: 'Bahraini Dinar' },
  { code: 'BIF', name: 'Burundian Franc' }, { code: 'BND', name: 'Brunei Dollar' }, { code: 'BOB', name: 'Bolivian Boliviano' },
  { code: 'BRL', name: 'Brazilian Real' }, { code: 'BWP', name: 'Botswanan Pula' }, { code: 'BYR', name: 'Belarusian Ruble' },
  { code: 'BZD', name: 'Belize Dollar' }, { code: 'CDF', name: 'Congolese Franc' }, { code: 'CHF', name: 'Swiss Franc' },
  { code: 'CLP', name: 'Chilean Peso' }, { code: 'CNY', name: 'Chinese Yuan' }, { code: 'COP', name: 'Colombian Peso' },
  { code: 'CRC', name: 'Costa Rican Colón' }, { code: 'CVE', name: 'Cape Verdean Escudo' },
  { code: 'CZK', name: 'Czech Republic Koruna' }, { code: 'DJF', name: 'Djiboutian Franc' }, { code: 'DKK', name: 'Danish Krone' },
  { code: 'DOP', name: 'Dominican Peso' }, { code: 'DZD', name: 'Algerian Dinar' }, { code: 'EEK', name: 'Estonian Kroon' },
  { code: 'EGP', name: 'Egyptian Pound' }, { code: 'ERN', name: 'Eritrean Nakfa' }, { code: 'ETB', name: 'Ethiopian Birr' },
  { code: 'GBP', name: 'British Pound Sterling' }, { code: 'GEL', name: 'Georgian Lari' }, { code: 'GHS', name: 'Ghanaian Cedi' },
  { code: 'GNF', name: 'Guinean Franc' }, { code: 'GTQ', name: 'Guatemalan Quetzal' }, { code: 'HKD', name: 'Hong Kong Dollar' },
  { code: 'HNL', name: 'Honduran Lempira' }, { code: 'HRK', name: 'Croatian Kuna' }, { code: 'HUF', name: 'Hungarian Forint' },
  { code: 'IDR', name: 'Indonesian Rupiah' }, { code: 'ILS', name: 'Israeli New Sheqel' }, { code: 'INR', name: 'Indian Rupee' },
  { code: 'IQD', name: 'Iraqi Dinar' }, { code: 'IRR', name: 'Iranian Rial' }, { code: 'ISK', name: 'Icelandic Króna' },
  { code: 'JMD', name: 'Jamaican Dollar' }, { code: 'JOD', name: 'Jordanian Dinar' }, { code: 'JPY', name: 'Japanese Yen' },
  { code: 'KES', name: 'Kenyan Shilling' }, { code: 'KHR', name: 'Cambodian Riel' }, { code: 'KMF', name: 'Comorian Franc' },
  { code: 'KRW', name: 'South Korean Won' }, { code: 'KWD', name: 'Kuwaiti Dinar' }, { code: 'KZT', name: 'Kazakhstani Tenge' },
  { code: 'LBP', name: 'Lebanese Pound' }, { code: 'LKR', name: 'Sri Lankan Rupee' }, { code: 'LTL', name: 'Lithuanian Litas' },
  { code: 'LVL', name: 'Latvian Lats' }, { code: 'LYD', name: 'Libyan Dinar' }, { code: 'MAD', name: 'Moroccan Dirham' },
  { code: 'MDL', name: 'Moldovan Leu' }, { code: 'MGA', name: 'Malagasy Ariary' }, { code: 'MKD', name: 'Macedonian Denar' },
  { code: 'MMK', name: 'Myanma Kyat' }, { code: 'MOP', name: 'Macanese Pataca' }, { code: 'MUR', name: 'Mauritian Rupee' },
  { code: 'MXN', name: 'Mexican Peso' }, { code: 'MYR', name: 'Malaysian Ringgit' }, { code: 'MZN', name: 'Mozambican Metical' },
  { code: 'NAD', name: 'Namibian Dollar' }, { code: 'NGN', name: 'Nigerian Naira' }, { code: 'NIO', name: 'Nicaraguan Córdoba' },
  { code: 'NOK', name: 'Norwegian Krone' }, { code: 'NPR', name: 'Nepalese Rupee' }, { code: 'NZD', name: 'New Zealand Dollar' },
  { code: 'OMR', name: 'Omani Rial' }, { code: 'PAB', name: 'Panamanian Balboa' }, { code: 'PEN', name: 'Peruvian Nuevo Sol' },
  { code: 'PHP', name: 'Philippine Peso' }, { code: 'PKR', name: 'Pakistani Rupee' }, { code: 'PLN', name: 'Polish Zloty' },
  { code: 'PYG', name: 'Paraguayan Guarani' }, { code: 'QAR', name: 'Qatari Rial' }, { code: 'RON', name: 'Romanian Leu' },
  { code: 'RSD', name: 'Serbian Dinar' }, { code: 'RUB', name: 'Russian Ruble' }, { code: 'RWF', name: 'Rwandan Franc' },
  { code: 'SAR', name: 'Saudi Riyal' }, { code: 'SDG', name: 'Sudanese Pound' }, { code: 'SEK', name: 'Swedish Krona' },
  { code: 'SGD', name: 'Singapore Dollar' }, { code: 'SOS', name: 'Somali Shilling' }, { code: 'SYP', name: 'Syrian Pound' },
  { code: 'THB', name: 'Thai Baht' }, { code: 'TND', name: 'Tunisian Dinar' }, { code: 'TOP', name: 'Tongan Paʻanga' },
  { code: 'TRY', name: 'Turkish Lira' }, { code: 'TTD', name: 'Trinidad and Tobago Dollar' },
  { code: 'TWD', name: 'New Taiwan Dollar' }, { code: 'TZS', name: 'Tanzanian Shilling' },
  { code: 'UAH', name: 'Ukrainian Hryvnia' }, { code: 'UGX', name: 'Ugandan Shilling' }, { code: 'UYU', name: 'Uruguayan Peso' },
  { code: 'UZS', name: 'Uzbekistan Som' }, { code: 'VEF', name: 'Venezuelan Bolívar' }, { code: 'VND', name: 'Vietnamese Dong' },
  { code: 'XAF', name: 'CFA Franc BEAC' }, { code: 'XOF', name: 'CFA Franc BCEAO' }, { code: 'YER', name: 'Yemeni Rial' },
  { code: 'ZAR', name: 'South African Rand' }, { code: 'ZMK', name: 'Zambian Kwacha' }],
};
