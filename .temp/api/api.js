import Request from './interceptor';
let getList = async function getList(data) {
  let res = await Request.get({
    url: '/119-42',
    data: data || ''
  });
  console.log('res request', res);
  return res;
};
export { getList };