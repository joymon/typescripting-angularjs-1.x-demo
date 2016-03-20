/// <reference path="box2dweb.d.ts" />
var b2Common = Box2D.Common;
var b2Math = Box2D.Common.Math;
var b2Collision = Box2D.Collision;
var b2Shapes = Box2D.Collision.Shapes;
var b2Dynamics = Box2D.Dynamics;
var b2Contacts = Box2D.Dynamics.Contacts;
var b2Controllers = Box2D.Dynamics.Controllers;
var b2Joints = Box2D.Dynamics.Joints;
var w1 = new Box2D.Dynamics.b2World(new Box2D.Common.Math.b2Vec2(0, 10), true);
var w2 = new b2Dynamics.b2World(new b2Math.b2Vec2(0, 10), true);
var debugDraw = new Box2D.Dynamics.b2DebugDraw();
debugDraw.SetSprite(document.getElementsByTagName("canvas")[0].getContext("2d"));
