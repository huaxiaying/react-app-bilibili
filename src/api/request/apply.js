import service from '../service';

/* 测试用请求 */
export function loadApplyInfoWithOutLogin(uuid) {
  return service({
    url: `/api/apply/public/${uuid}`,
    method: 'GET',
  })
}