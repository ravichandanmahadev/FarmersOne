

function IndexServiceProvider()
{
    var provider = this;
    provider.defaults = { Menu: [] , BrandName:""};
   
    provider.$get = function ()
    {
        var service = new IndexService(provider.defaults);
        return service;
    }
    return provider;
}

function IndexService(configObj) {
    'use strict';
    var service = this;

    service.MenuItem = configObj.Menu;
    service.BrandName = configObj.BrandName;
    service.LogoName = configObj.LogoUrl;
}


function config(indexServiceProvider)
{
    indexServiceProvider.defaults.Menu = [{ item: "Home" }, { item: "The Farmers" }, { item: "The Harvests" }];
    indexServiceProvider.defaults.BrandName = "Farmers One";
    indexServiceProvider.defaults.LogoUrl = "/Content/Images/Logo.png";
}
