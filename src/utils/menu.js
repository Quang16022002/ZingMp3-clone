import icons from './icons';

const { MdOutlineLibraryMusic, MdOutlineMultilineChart, TbChartArcs, RiUserFollowLine } = icons;
export const sidebarMenu = [
    {
        path: 'mymusic',
        text: 'Cá nhân',
        icons: <MdOutlineLibraryMusic size={24} color="#fff" />,
    },
    {
        path: '',
        text: 'Khám phá',
        icons: <TbChartArcs size={24} color="#fff" />,
    },
    {
        path: 'zingchart',
        text: '#ZingChart',
        icons: <MdOutlineMultilineChart size={24} color="#fff" />,
    },
    {
        path: 'follow',
        text: 'Theo dõi',
        icons: <RiUserFollowLine size={24} color="#fff" />,
    },
];
