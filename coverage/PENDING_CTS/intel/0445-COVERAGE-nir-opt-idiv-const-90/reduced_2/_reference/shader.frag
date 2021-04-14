#version 320 es
precision highp float;

layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 0) uniform buf0 {
 vec2 injectionSwitch;
};
layout(set = 0, binding = 1) uniform buf1 {
 vec2 resolution;
};
float compute_derivative_x(float v)
{
 return dFdx(v) * injectionSwitch.y;
}
float compute_derivative_y(float v)
{
 return dFdy(v) * injectionSwitch.y;
}
float compute_stripe(float v)
{
 return smoothstep(- .9, 1., (v) / ((injectionSwitch.y > injectionSwitch.x) ? compute_derivative_x(v) : compute_derivative_y(v)));
}
void main()
{
 vec2 uv = gl_FragCoord.xy / resolution.x;
 vec3 col = vec3(0, 0, 0);
 bool c1 = uv.y < 0.25;
 if(c1)
  {
   float stripe = compute_stripe(cos((uv.x + uv.y) * 20.0));
   col = mix(vec3(uv.x, 0, 0.75), vec3(.8, .7, uv.x), stripe);
   _GLF_color = vec4(col, 1.0);
   return;
  }
 bool c2 = uv.y < 0.5;
 if(! c1 && c2)
  {
   float stripe = compute_stripe(tan((uv.x + uv.y) * 20.0));
   col = mix(vec3(0.5, uv.x, 0.1), vec3(.4, 0, .5), stripe);
   _GLF_color = vec4(col, 1.0);
   return;
  }
 bool c3 = uv.y < 0.75;
 if(! c1 && ! c2 && c3)
  {
   float stripe = compute_stripe(cos((uv.x + uv.y) * 20.0));
   col = mix(vec3(.7, sinh(uv.x), uv.x), vec3(.3, .5, uv.x), stripe);
   _GLF_color = vec4(col, 1.0);
   return;
  }
 bool c4 = uv.y >= 0.75;
 if(! c1 && ! c2 && ! c3 && c4)
  {
   float stripe = compute_stripe(tan((uv.x + uv.y) * 20.0));
   col = mix(vec3(uv.x, .8, 0), vec3(1, uv.y, 0), stripe);
   _GLF_color = vec4(col, 1.0);
   return;
  }
}
