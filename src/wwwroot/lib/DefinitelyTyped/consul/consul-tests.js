/// <reference path="./consul.d.ts" />
var Consul = require("consul");
var ConsulStatic;
var AclStatic = ConsulStatic.Acl;
var AgentStatic = ConsulStatic.Agent;
var AgentCheckStatic = ConsulStatic.Agent.Check;
var AgentServiceStatic = ConsulStatic.Agent.Service;
var CatalogStatic = ConsulStatic.Catalog;
var CatalogNodeStatic = ConsulStatic.Catalog.Node;
var CatalogServiceStatic = ConsulStatic.Catalog.Service;
var EventStatic = ConsulStatic.Event;
var HealthStatic = ConsulStatic.Health;
var KvStatic = ConsulStatic.Kv;
var LockStatic = ConsulStatic.Lock;
var SessionStatic = ConsulStatic.Session;
var StatusStatic = ConsulStatic.Status;
var WatchStatic = ConsulStatic.Watch;
var consul;
consul = Consul();
consul = new Consul();
// Consul.Acl
{
    var acl = consul.acl;
    acl = new AclStatic(consul);
    consul = acl.consul;
    {
        var opts;
        var callback_1;
        var result_1;
        acl.create(opts, callback_1);
        acl.create(callback_1);
        result_1 = acl.create(opts);
        result_1 = acl.create();
    }
    {
        var opts;
        var callback_2;
        var result_2;
        acl.update(opts, callback_2);
        result_2 = acl.update(opts);
    }
    {
        var id;
        var opts;
        var callback_3;
        var result_3;
        acl.destroy(id, callback_3);
        acl.destroy(opts, callback_3);
        result_3 = acl.destroy(id);
        result_3 = acl.destroy(opts);
    }
    {
        var id;
        var opts;
        var callback_4;
        var result_4;
        acl.info(id, callback_4);
        acl.info(opts, callback_4);
        result_4 = acl.info(id);
        result_4 = acl.info(opts);
        acl.get(id, callback_4);
        acl.get(opts, callback_4);
        result_4 = acl.get(id);
        result_4 = acl.get(opts);
    }
    {
        var id;
        var opts;
        var callback_5;
        var result_5;
        acl.clone(id, callback_5);
        acl.clone(opts, callback_5);
        result_5 = acl.clone(id);
        result_5 = acl.clone(opts);
    }
    {
        var opts;
        var callback_6;
        var result_6;
        acl.list(opts, callback_6);
        acl.list(callback_6);
        result_6 = acl.list(opts);
        result_6 = acl.list();
    }
}
// Consul.Agent
{
    var agent = consul.agent;
    agent = new AgentStatic(consul);
    consul = agent.consul;
    {
        var opts;
        var callback_7;
        var result_7;
        agent.checks(opts, callback_7);
        agent.checks(callback_7);
        result_7 = agent.checks(opts);
        result_7 = agent.checks();
    }
    {
        var opts;
        var callback_8;
        var result_8;
        agent.services(opts, callback_8);
        agent.services(callback_8);
        result_8 = agent.services(opts);
        result_8 = agent.services();
    }
    {
        var opts;
        var callback_9;
        var result_9;
        agent.members(opts, callback_9);
        agent.members(callback_9);
        result_9 = agent.members(opts);
        result_9 = agent.members();
    }
    {
        var opts;
        var callback_10;
        var result_10;
        agent.self(opts, callback_10);
        agent.self(callback_10);
        result_10 = agent.self(opts);
        result_10 = agent.self();
    }
    {
        var enable;
        var opts;
        var callback_11;
        var result_11;
        agent.maintenance(enable, callback_11);
        agent.maintenance(opts, callback_11);
        result_11 = agent.maintenance(enable);
        result_11 = agent.maintenance(opts);
    }
    {
        var address;
        var opts;
        var callback_12;
        var result_12;
        agent.join(address, callback_12);
        agent.join(opts, callback_12);
        result_12 = agent.join(address);
        result_12 = agent.join(opts);
    }
    {
        var node;
        var opts;
        var callback_13;
        var result_13;
        agent.forceLeave(node, callback_13);
        agent.forceLeave(opts, callback_13);
        result_13 = agent.forceLeave(node);
        result_13 = agent.forceLeave(opts);
    }
    // Consul.Agent.Check
    {
        var check_1 = consul.agent.check;
        check_1 = new AgentCheckStatic(consul);
        consul = check_1.consul;
        {
            var id;
            var opts;
            var callback_14;
            var result_14;
            check_1.list(opts, callback_14);
            check_1.list(callback_14);
            result_14 = check_1.list(opts);
            result_14 = check_1.list();
        }
        {
            var opts;
            var callback_15;
            var result_15;
            check_1.register(opts, callback_15);
            result_15 = check_1.register(opts);
        }
        {
            var id;
            var opts;
            var callback_16;
            var result_16;
            check_1.deregister(id, callback_16);
            check_1.deregister(opts, callback_16);
            result_16 = check_1.deregister(id);
            result_16 = check_1.deregister(opts);
        }
        {
            var id;
            var opts;
            var callback_17;
            var result_17;
            check_1.pass(id, callback_17);
            check_1.pass(opts, callback_17);
            result_17 = check_1.pass(id);
            result_17 = check_1.pass(opts);
        }
        {
            var id;
            var opts;
            var callback_18;
            var result_18;
            check_1.warn(id, callback_18);
            check_1.warn(opts, callback_18);
            result_18 = check_1.warn(id);
            result_18 = check_1.warn(opts);
        }
        {
            var id;
            var opts;
            var callback_19;
            var result_19;
            check_1.fail(id, callback_19);
            check_1.fail(opts, callback_19);
            result_19 = check_1.fail(id);
            result_19 = check_1.fail(opts);
        }
    }
    // Consul.Agent.Service
    {
        var service = consul.agent.service;
        service = new AgentServiceStatic(consul);
        consul = service.consul;
        {
            var opts;
            var callback_20;
            var result_20;
            service.list(opts, callback_20);
            service.list(callback_20);
            result_20 = service.list(opts);
            result_20 = service.list();
        }
        {
            var id;
            var opts;
            var callback_21;
            var result_21;
            service.register(id, callback_21);
            service.register(opts, callback_21);
            result_21 = service.register(id);
            result_21 = service.register(opts);
        }
        {
            var id;
            var opts;
            var callback_22;
            var result_22;
            service.deregister(id, callback_22);
            service.deregister(opts, callback_22);
            result_22 = service.deregister(id);
            result_22 = service.deregister(opts);
        }
        {
            var opts;
            var callback_23;
            var result_23;
            service.maintenance(opts, callback_23);
            result_23 = service.maintenance(opts);
        }
    }
}
// Consul.Catalog
{
    var catalog = consul.catalog;
    catalog = new CatalogStatic(consul);
    consul = catalog.consul;
    {
        var opts;
        var callback_24;
        var result_24;
        catalog.datacenters(opts, callback_24);
        catalog.datacenters(callback_24);
        result_24 = catalog.datacenters(opts);
        result_24 = catalog.datacenters();
    }
    {
        var dc;
        var opts;
        var callback_25;
        var result_25;
        catalog.nodes(dc, callback_25);
        catalog.nodes(opts, callback_25);
        catalog.nodes(callback_25);
        result_25 = catalog.nodes(dc);
        result_25 = catalog.nodes(opts);
        result_25 = catalog.nodes();
    }
    {
        var dc;
        var opts;
        var callback_26;
        var result_26;
        catalog.services(dc, callback_26);
        catalog.services(opts, callback_26);
        catalog.services(callback_26);
        result_26 = catalog.services(dc);
        result_26 = catalog.services(opts);
        result_26 = catalog.services();
    }
    // Consul.Catalog.Node
    {
        var node = consul.catalog.node;
        node = new CatalogNodeStatic(consul);
        consul = node.consul;
        {
            var dc;
            var opts;
            var callback_27;
            var result_27;
            node.list(dc, callback_27);
            node.list(opts, callback_27);
            node.list(callback_27);
            result_27 = node.list(dc);
            result_27 = node.list(opts);
            result_27 = node.list();
        }
        {
            var nodeOption;
            var opts;
            var callback_28;
            var result_28;
            node.services(nodeOption, callback_28);
            node.services(opts, callback_28);
            result_28 = node.services(nodeOption);
            result_28 = node.services(opts);
        }
    }
    // Consul.Catalog.Service
    {
        var service = consul.catalog.service;
        service = new CatalogServiceStatic(consul);
        consul = service.consul;
        {
            var dc;
            var opts;
            var callback_29;
            var result_29;
            service.list(dc, callback_29);
            service.list(opts, callback_29);
            service.list(callback_29);
            result_29 = service.list(dc);
            result_29 = service.list(opts);
            result_29 = service.list();
        }
        {
            var serviceOption;
            var opts;
            var callback_30;
            var result_30;
            service.nodes(serviceOption, callback_30);
            service.nodes(opts, callback_30);
            result_30 = service.nodes(serviceOption);
            result_30 = service.nodes(opts);
        }
    }
}
// Consul.Event
{
    var event_1 = consul.event;
    event_1 = new EventStatic(consul);
    consul = event_1.consul;
    {
        var name_1;
        var payload;
        var opts;
        var callback_31;
        var result_31;
        event_1.fire(name_1, payload, callback_31);
        event_1.fire(name_1, callback_31);
        event_1.fire(opts, callback_31);
        result_31 = event_1.fire(name_1, payload);
        result_31 = event_1.fire(name_1);
        result_31 = event_1.fire(opts);
    }
    {
        var name_2;
        var opts;
        var callback_32;
        var result_32;
        event_1.list(name_2, callback_32);
        event_1.list(opts, callback_32);
        event_1.list(callback_32);
        result_32 = event_1.list(name_2);
        result_32 = event_1.list(opts);
        result_32 = event_1.list();
    }
}
// Consul.Health
{
    var health = consul.health;
    health = new HealthStatic(consul);
    consul = health.consul;
    {
        var node;
        var opts;
        var callback_33;
        var result_33;
        health.node(name, callback_33);
        health.node(opts, callback_33);
        result_33 = health.node(name);
        result_33 = health.node(opts);
    }
    {
        var service;
        var opts;
        var callback_34;
        var result_34;
        health.checks(service, callback_34);
        health.checks(opts, callback_34);
        result_34 = health.checks(service);
        result_34 = health.checks(opts);
    }
    {
        var service;
        var opts;
        var callback_35;
        var result_35;
        health.service(service, callback_35);
        health.service(opts, callback_35);
        result_35 = health.service(service);
        result_35 = health.service(opts);
    }
    {
        var state;
        var opts;
        var callback_36;
        var result_36;
        health.state(state, callback_36);
        health.state(opts, callback_36);
        result_36 = health.state(state);
        result_36 = health.state(opts);
    }
}
// Consul.Kv
{
    var kv = consul.kv;
    kv = new KvStatic(consul);
    consul = kv.consul;
    {
        var key;
        var opts;
        var callback_37;
        var result_37;
        kv.get(key, callback_37);
        kv.get(opts, callback_37);
        result_37 = kv.get(key);
        result_37 = kv.get(opts);
    }
    {
        var key;
        var opts;
        var callback_38;
        var result_38;
        kv.keys(key, callback_38);
        kv.keys(opts, callback_38);
        kv.keys(callback_38);
        result_38 = kv.keys(key);
        result_38 = kv.keys(opts);
        result_38 = kv.keys();
    }
    {
        var key;
        var value_1;
        var opts;
        var callback_39;
        var result_39;
        kv.set(key, value_1, opts, callback_39);
        kv.set(key, value_1, callback_39);
        kv.set(opts, callback_39);
        result_39 = kv.set(key, value_1, opts);
        result_39 = kv.set(key, value_1);
        result_39 = kv.set(opts);
    }
    {
        var key;
        var opts;
        var callback_40;
        var result_40;
        kv.del(key, callback_40);
        kv.del(opts, callback_40);
        result_40 = kv.del(key);
        result_40 = kv.del(opts);
        kv.delete(key, callback_40);
        kv.delete(opts, callback_40);
        result_40 = kv.delete(key);
        result_40 = kv.delete(opts);
    }
}
// Consul.Lock
{
    var lock_1;
    var opts;
    lock_1 = new LockStatic(consul, opts);
    lock_1 = consul.lock(opts);
    consul = lock_1.consul;
    lock_1.acquire();
    lock_1.release();
}
// Consul.Session
{
    var session_1 = consul.session;
    session_1 = new SessionStatic(consul);
    consul = session_1.consul;
    {
        var opts;
        var callback_41;
        var result_41;
        session_1.create(opts, callback_41);
        session_1.create(callback_41);
        result_41 = session_1.create(opts);
        result_41 = session_1.create();
    }
    {
        var id;
        var opts;
        var callback_42;
        var result_42;
        session_1.destroy(id, callback_42);
        session_1.destroy(opts, callback_42);
        result_42 = session_1.destroy(id);
        result_42 = session_1.destroy(opts);
    }
    {
        var id;
        var opts;
        var callback_43;
        var result_43;
        session_1.info(id, callback_43);
        session_1.info(opts, callback_43);
        result_43 = session_1.info(id);
        result_43 = session_1.info(opts);
        session_1.get(id, callback_43);
        session_1.get(opts, callback_43);
        result_43 = session_1.get(id);
        result_43 = session_1.get(opts);
    }
    {
        var node;
        var opts;
        var callback_44;
        var result_44;
        session_1.node(node, callback_44);
        session_1.node(opts, callback_44);
        result_44 = session_1.node(node);
        result_44 = session_1.node(opts);
    }
    {
        var opts;
        var callback_45;
        var result_45;
        session_1.list(opts, callback_45);
        session_1.list(callback_45);
        result_45 = session_1.list(opts);
        result_45 = session_1.list();
    }
    {
        var id;
        var opts;
        var callback_46;
        var result_46;
        session_1.renew(id, callback_46);
        session_1.renew(opts, callback_46);
        result_46 = session_1.renew(id);
        result_46 = session_1.renew(opts);
    }
}
// Consul.Status
{
    var status_1 = consul.status;
    status_1 = new StatusStatic(consul);
    consul = status_1.consul;
    {
        var opts;
        var callback_47;
        var result_47;
        status_1.leader(opts, callback_47);
        status_1.leader(callback_47);
        result_47 = status_1.leader(opts);
        result_47 = status_1.leader();
    }
    {
        var opts;
        var callback_48;
        var result_48;
        status_1.peers(opts, callback_48);
        status_1.peers(callback_48);
        result_48 = status_1.peers(opts);
        result_48 = status_1.peers();
    }
}
// Consul.Watch
{
    var watch;
    var opts;
    watch = new WatchStatic(consul, opts);
    watch = consul.watch(opts);
    consul = watch.consul;
    watch.isRunning();
    watch.updateTime();
    watch.end();
}
