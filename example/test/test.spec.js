/**
 * @file mocha demo file
 **/
 import {shallowMount} from 'san-test-utils';
 import message from '@components/message.san';
 
 describe('Message', () => {
    it('renders msg when passed', () => {
        const msg = 'new messag';
        const wrapper = shallowMount(message, {
            data: {msg}
        });
        expect(wrapper.text()).toBe('new message');
    });
 
    it('renders default message if not passed a data', () => {
         const defaultMessage = 'default message';
         const wrapper = shallowMount(message);
         expect(wrapper.text()).toBe(defaultMessage);
    });
 
    it('测试算数', () => {
         expect(1 + 2).toBe(4);
    });
 });
