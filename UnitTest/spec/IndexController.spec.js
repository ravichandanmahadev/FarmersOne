describe("IndexController", function(){
var IndexController;
var $controller;

beforeEach(function(){
  module(function($provide){
    $provide.service("indexServiceMock", function(){
      var service = this;
      service.MenuItem = [];
      service.LogoName = "Test Logo";
      service.BrandName = "Test Brand";
    });
  });

});

beforeEach(module("root"));

beforeEach(inject(function(_$controller_,indexServiceMock){
  $controller = _$controller_;
  IndexController = $controller("IndexController", {indexService:indexServiceMock});
}));

it("Validate logoname, brandename text", function(){
  console.log(IndexController);
  expect(IndexController.LogoUrl).toBe("Test Logo");
  expect(IndexController.BrandText).toBe("Test Brand");
});

});
