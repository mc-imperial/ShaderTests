#version 320 es

precision highp float;

precision highp int;

layout(location = 0) out vec4 _GLF_color;

// Contents of resolution: [256.0, 256.0]
layout(push_constant) uniform buf_push {
 vec2 resolution;
};
float nb_mod(float limit, float ref)
{
 float s = 1.0;
 int i = 1;
 for(int _injected_loop_counter = 1; _injected_loop_counter > 0; _injected_loop_counter --)
  {
   while(i < 800)
    {
     if(mod(float(i), ref) <= 1.0)
      {
       s += 1.0;
      }
     if(float(i) >= limit)
      {
       return s;
      }
     i ++;
    }
  }
 return 1.0;
}
void main()
{
 vec4 c = vec4(1.0);
 float ref = 1.0;
 ref = resolution.x;
 c.y = nb_mod(gl_FragCoord.y, ref);
 _GLF_color = c;
}
