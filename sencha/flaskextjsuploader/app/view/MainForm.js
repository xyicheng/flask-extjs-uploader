/*
 * File: app/view/MainForm.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('flaskextjsuploader.view.MainForm', {
    extend: 'Ext.form.Panel',

    height: 100,
    id: 'MainForm',
    margin: 25,
    width: 400,
    bodyPadding: 10,
    title: 'Flask ExtJS Uploader',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'filefield',
                    anchor: '100%',
                    id: 'form_file_upload',
                    fieldLabel: 'Select File'
                },
                {
                    xtype: 'button',
                    id: 'button_reset',
                    margin: 10,
                    text: 'Reset',
                    listeners: {
                        click: {
                            fn: me.button_reset_onButtonClick,
                            scope: me
                        }
                    }
                },
                {
                    xtype: 'button',
                    id: 'button_upload',
                    margin: 10,
                    text: 'Upload',
                    listeners: {
                        click: {
                            fn: me.button_upload_onButtonClick,
                            scope: me
                        }
                    }
                }
            ]
        });

        me.callParent(arguments);
    },

    button_reset_onButtonClick: function(button, e, options) {
        Ext.ComponentManager.get('form_file_upload').reset();
    },

    button_upload_onButtonClick: function(button, e, options) {
        var form = Ext.ComponentManager.get('MainForm');

        form.submit({
            url: '/upload',
            waitMsg: 'Uploading...',
            success: function(form, action) {
                Ext.Msg.alert('Success', action.result.message);
            },
            failure: function(form, action) {
                Ext.Msg.alert('Failed', action.result ? action.result.message : 'No Response');
            }
        });
    }

});