import React, { useEffect, useState } from 'react';
import { Box, Grommet, WorldMap, ResponsiveContext, Heading, Grid, Text } from 'grommet';
import { grommet } from 'grommet/themes';
import TextAnimation from 'react-animate-text';

export default function HomePage() {

  const [country, setCountry] = useState("");

  useEffect(() => {
    fetch('https://extreme-ip-lookup.com/json/')
      .then(res => res.json())
      .then(data => setCountry(data.country))
      .catch(err => console.log(err));
  }, [])

  const allLatLongs = [
    "AD  42.54624  1.601554  Andorra",
    "AE  23.424076  53.847818  United Arab Emirates",
    "AF  33.93911  67.709953  Afghanistan",
    "AL  41.153332  20.168331  Albania",
    "AM  40.069099  45.038189  Armenia",
    "AO  -11.202692  17.873887  Angola",
    "AR  -38.416097  -63.616672  Argentina",
    "AT  47.516231  14.550072  Austria",
    "AU  -25.274398  133.775136  Australia",
    "AZ  40.143105  47.576927  Azerbaijan",
    "BA  43.915886  17.679076  Bosnia and Herzegovina",
    "BD  23.684994  90.356331  Bangladesh",
    "BE  50.503887  4.469936  Belgium",
    "BG  42.733883  25.48583  Bulgaria",
    "BH  25.930414  50.637772  Bahrain",
    "BN  4.535277  114.727669  Brunei",
    "BO  -16.290154  -63.588653  Bolivia",
    "BR  -14.235004  -51.92528  Brazil",
    "BY  53.709807  27.953389  Belarus",
    "BZ  17.189877  -88.49765  Belize",
    "CA  56.130366  -106.346771  Canada",
    "CD  -4.038333  21.758664  DR of Congo",
    "CF  6.611111  20.939444  Central African Republic",
    "CG  -0.228021  15.827659  Congo",
    "CH  46.818188  8.227512  Switzerland",
    "CI  7.539989  -5.54708  Côte d'Ivoire",
    "CL  -35.675147  -71.542969  Chile",
    "CM  7.369722  12.354722  Cameroon",
    "CN  35.86166  104.195397  China",
    "CO  4.570868  -74.297333  Colombia",
    "CR  9.748917  -83.753428  Costa Rica",
    "CU  21.521757  -77.781167  Cuba",
    "CZ  49.817492  15.472962  Czech Republic",
    "DE  51.165691  10.451526  Germany",
    "DJ  11.825138  42.590275  Djibouti",
    "DK  56.26392  9.501785  Denmark",
    "DO  18.735693  -70.162651  Dominican Republic",
    "DZ  28.033886  1.659626  Algeria",
    "EC  -1.831239  -78.183406  Ecuador",
    "EE  58.595272  25.013607  Estonia",
    "EG  26.820553  30.802498  Egypt",
    "ER  15.179384  39.782334  Eritrea",
    "ES  40.463667  -3.74922  Spain",
    "ET  9.145  40.489673  Ethiopia",
    "FI  61.92411  25.748151  Finland",
    "FR  46.227638  2.213749  France",
    "GA  -0.803689  11.609444  Gabon",
    "GB  55.378051  -3.435973  United Kingdom",
    "GE  42.315407  43.356892  Georgia",
    "GH  7.946527  -1.023194  Ghana",
    "GL  71.706936  -42.604303  Greenland",
    "GM  13.443182  -15.310139  Gambia",
    "GN  9.945587  -9.696645  Guinea",
    "GR  39.074208  21.824312  Greece",
    "GT  15.783471  -90.230759  Guatemala",
    "GZ  31.354676  34.308825  Gaza Strip",
    "HK  22.396428  114.109497  Hong Kong",
    "HN  15.199999  -86.241905  Honduras",
    "HR  45.1  15.2  Croatia",
    "HT  18.971187  -72.285215  Haiti",
    "HU  47.162494  19.503304  Hungary",
    "ID  -0.789275  113.921327  Indonesia",
    "IE  53.41291  -8.24389  Ireland",
    "IL  31.046051  34.851612  Israel",
    "IN  20.593684  78.96288  India",
    "IQ  33.223191  43.679291  Iraq",
    "IR  32.427908  53.688046  Iran",
    "IS  64.963051  -19.020835  Iceland",
    "IT  41.87194  12.56738  Italy",
    "JM  18.109581  -77.297508  Jamaica",
    "JO  30.585164  36.238414  Jordan",
    "JP  36.204824  138.252924  Japan",
    "KE  -0.023559  37.906193  Kenya",
    "KG  41.20438  74.766098  Kyrgyzstan",
    "KH  12.565679  104.990963  Cambodia",
    "KP  40.339852  127.510093  North Korea",
    "KR  35.907757  127.766922  South Korea",
    "KW  29.31166  47.481766  Kuwait",
    "KZ  48.019573  66.923684  Kazakhstan",
    "LA  19.85627  102.495496  Laos",
    "LB  33.854721  35.862285  Lebanon",
    "LI  47.166  9.555373  Liechtenstein",
    "LK  7.873054  80.771797  Sri Lanka",
    "LT  55.169438  23.881275  Lithuania",
    "LU  49.815273  6.129583  Luxembourg",
    "LV  56.879635  24.603189  Latvia",
    "LY  26.3351  17.228331  Libya",
    "MA  31.791702  -7.09262  Morocco",
    "MC  43.750298  7.412841  Monaco",
    "MD  47.411631  28.369885  Moldova",
    "ME  42.708678  19.37439  Montenegro",
    "MG  -18.766947  46.869107  Madagascar",
    "MK  41.608635  21.745275  Macedonia",
    "ML  17.570692  -3.996166  Mali",
    "MM  21.913965  95.956223  Myanmar",
    "MN  46.862496  103.846656  Mongolia",
    "MX  23.634501  -102.552784  Mexico",
    "MY  4.210484  101.975766  Malaysia",
    "MZ  -18.665695  35.529562  Mozambique",
    "NA  -22.95764  18.49041  Namibia",
    "NE  17.607789  8.081666  Niger",
    "NG  9.081999  8.675277  Nigeria",
    "NL  52.132633  5.291266  Netherlands",
    "NO  60.472024  8.468946  Norway",
    "NP  28.394857  84.124008  Nepal",
    "NZ  -40.900557  174.885971  New Zealand",
    "OM  21.512583  55.923255  Oman",
    "PA  8.537981  -80.782127  Panama",
    "PE  -9.189967  -75.015152  Peru",
    "PH  12.879721  121.774017  Philippines",
    "PK  30.375321  69.345116  Pakistan",
    "PL  51.919438  19.145136  Poland",
    "PR  18.220833  -66.590149  Puerto Rico",
    "PS  31.952162  35.233154  Palestine",
    "PT  39.399872  -8.224454  Portugal",
    "PY  -23.442503  -58.443832  Paraguay",
    "QA  25.354826  51.183884  Qatar",
    "RO  45.943161  24.96676  Romania",
    "RS  44.016521  21.005859  Serbia",
    "RU  61.52401  105.318756  Russia",
    "RW  -1.940278  29.873888  Rwanda",
    "SA  23.885942  45.079162  Saudi Arabia",
    "SD  12.862807  30.217636  Sudan",
    "SE  60.128161  18.643501  Sweden",
    "SG  1.352083  103.819836  Singapore",
    "SI  46.151241  14.995463  Slovenia",
    "SK  48.669026  19.699024  Slovakia",
    "SN  14.497401  -14.452362  Senegal",
    "SO  5.152149  46.199616  Somalia",
    "SV  13.794185  -88.89653  El Salvador",
    "SY  34.802075  38.996815  Syria",
    "TD  15.454166  18.732207  Chad",
    "TH  15.870032  100.992541  Thailand",
    "TJ  38.861034  71.276093  Tajikistan",
    "TM  38.969719  59.556278  Turkmenistan",
    "TN  33.886917  9.537499  Tunisia",
    "TR  38.963745  35.243322  Turkey",
    "TW  23.69781  120.960515  Taiwan",
    "TZ  -6.369028  34.888822  Tanzania",
    "UA  48.379433  31.16558  Ukraine",
    "UG  1.373333  32.290275  Uganda",
    "US  37.09024  -95.712891  United States",
    "UY  -32.522779  -55.765835  Uruguay",
    "UZ  41.377491  64.585262  Uzbekistan",
    "VE  6.42375  -66.58973  Venezuela",
    "VN  14.058324  108.277199  Vietnam",
    "YE  15.552727  48.516388  Yemen",
    "ZA  -30.559482  22.937506  South Africa",
    "ZM  -13.133897  27.849332  Zambia",
    "ZW  -19.015438  29.154857  Zimbabwe"
  ]

  const l = [];
  
  function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  const age = calculate_age(new Date(2003, 2, 1));

  function countries() {
    allLatLongs.map((country, i) => {
      let data = country.split('  ');
      l.push({
        name: data[3],
        location: [parseFloat(data[1]), parseFloat(data[2])],
        color: 'accent-2',
        onClick: (name) => {
          setCountry(name);
        }
      })
      return null;
    })
  }

  countries();

  return (
    <Grommet theme={grommet} style={{backgroundColor: "black"}}>
      <ResponsiveContext.Consumer>
        {size => size === "small" ? (
            <Box align="start" pad="large" style={{marginTop: "15%"}}>
              <TextAnimation charInterval={80}>
                <Heading>Hi, <br></br> My Name is Omar Abdiwali and I am an {age} year-old developer.</Heading>
                <Text size="xl">
                  I have used Python, C++, and Javascript with frameworks like React
                  to create my projects and do classwork. Currently, I am a freshman in university studying
                  Computer Science. <br></br> Trying to reach me: <Text weight="bold" size="xl"><a href="mailto:omarabdiwali17@gmail.com" style={{color: "grey"}}>Email!</a></Text>
                </Text>
              </TextAnimation>
            </Box>
        ) : (
            <Grid columns={{count: 2, size: 'auto'}} gap="small" style={{marginTop: "6%"}}>
              <Box align="start" pad="small">
                <TextAnimation charInterval={80}>
                  <Heading>Hi, <br></br> My Name is Omar Abdiwali and I am an {age} year-old developer.</Heading>
                  <Text size="2xl">
                    I have used Python, C++, and Javascript with frameworks like React
                    to create my projects and do classwork. Currently, I am a freshman in university studying
                    Computer Science. <br></br> Trying to reach me: <Text weight="bold" size="2xl"><a href="mailto:omarabdiwali17@gmail.com" style={{color: "grey"}}>Email!</a></Text>
                  </Text>
                </TextAnimation>
              </Box>
            <Box align="center" pad="small">
              <Heading color="dark-3" style={{paddingBottom: "2%"}} level={2}>Current Country: {country}</Heading>
              <WorldMap color="graph-1" places={l} />
            </Box>
          </Grid>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
}
