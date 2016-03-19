using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using System.Globalization;
using Newtonsoft.Json;
using WorldDataBank.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WorldDataBank.Controllers
{
    [Route("api/[controller]")]
    public class CountriesController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<Country> Get()
        {
            return new List<Country>() {
                new Country() {Name="India",Code="in" },
                new Country() {Name="United States of America",Code="us" }
            };
            //Cannot use this as .Net core doesn;t have CultureInfo.GetCultures() 
            //List<RegionInfo> regions = new List<RegionInfo>();
            //foreach (CultureInfo ObjCultureInfo in CultureInfo.GetCultures(CultureTypes.SpecificCultures))
            //{
            //    RegionInfo objRegionInfo = new RegionInfo(ObjCultureInfo.Name);
            //    //if (!objDic.ContainsKey(objRegionInfo.EnglishName))
            //    {
            //        regions.Add(objRegionInfo);
            //    }
            //}
            //return regions;
            //return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
