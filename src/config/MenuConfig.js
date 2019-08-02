/**
 * 系统菜单配置
 * @author liuxingdong
 * @type js
 */
const menus = [{
  menuId: 1,
  menuName: '首页',
  menuFlag: 'home',
  menuIcon: 'home',
  menuURL: '',
},
{
  menuId: 2,
  menuName: '用户管理',
  menuFlag: 'user',
  menuIcon: 'home',
  menuURL: '',
},
{
  menuId: 3,
  menuName: '角色管理',
  menuFlag: 'role',
  menuIcon: 'video-camera',
  menuURL: '',
},
{
  menuId: 8,
  menuName: '业务管理',
  menuFlag: 'service',
  menuIcon: 'video-camera',
  menuURL: '',
  child: [{
    menuId: 4,
    menuName: '商品管理',
    menuFlag: 'goods',
    menuIcon: 'video-camera',
    menuURL: '',
  },
  {
    menuId: 5,
    menuName: '订单管理',
    menuFlag: 'orders',
    menuIcon: 'video-camera',
    menuURL: '',
  },
  {
    menuId: 6,
    menuName: 'banner管理',
    menuFlag: 'banner',
    menuIcon: 'video-camera',
    menuURL: '',
  }],
},
{
  menuId: 7,
  menuName: '菜单管理',
  menuFlag: 'menu',
  menuIcon: 'upload',
  menuURL: '',
}];
export default menus;
