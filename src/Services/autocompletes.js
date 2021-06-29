export default function searchPlaces(search) {
  const params = {
    country: 'VN',
    key: process.env.REACT_APP_A_KEY,
    language: 'vi',
    locale: 'vi',
    num_results: '5',
    user_input: search,
    api_version: '1.2.0',
    satori_config_token: process.env.REACT_APP_SATORI_CONFIG_TOKEN,
    vertical_refinement: 'homes',
    region: '-1',
    options:
      'should_filter_by_vertical_refinement|hide_nav_results|should_show_stays|simple_search',
  };
  return fetch(`https://www.airbnb.com.vn/api/v2/autocompletes?${new URLSearchParams(params)}`, {
    method: 'GET',
  }).then((r) => r.json())
    .catch(() => ({ isError: true }));
}
