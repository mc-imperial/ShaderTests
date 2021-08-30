#version 320 es

precision highp float;

precision highp int;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of injectionSwitch: [0.0, 1.0]
layout(push_constant) uniform buf_push {
 highp vec2 injectionSwitch;
};
layout(location = 0) out vec4 _GLF_color;

float nb_mod(float limit)
{
 float s = 1.0;
 if(1.0 > injectionSwitch.y)
  {
   if(gl_FragCoord.x < 1.0)
    {
    }
   else
    {
     return 1.0;
    }
  }
 while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound))
  {
   _GLF_global_loop_count ++;
   s += 1.0;
   _GLF_color = vec4(1.0, 1.0, 1.0, 9.4);
   if(gl_FragCoord.x >= 0.0)
    {
     _GLF_color = vec4(1.0);
    }
   if(1.0 >= limit)
    {
     return s;
    }
  }
 for(int _injected_loop_counter = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
  {
   _GLF_global_loop_count ++;
  }
 return s;
}
void main()
{
 if(gl_FragCoord.x < 1.0)
  {
   return;
  }
 vec4 _GLF_outVarBackup_GLF_color = vec4(1.0);
 _GLF_outVarBackup_GLF_color = _GLF_color;
 if(gl_FragCoord.x >= 0.0)
  {
   _GLF_color = vec4(1.0);
  }
 _GLF_color = _GLF_outVarBackup_GLF_color;
 if(gl_FragCoord.y < 1.0)
  {
   return;
  }
 vec4 c = vec4(1.0);
 c.y = nb_mod(gl_FragCoord.y);
 if(gl_FragCoord.x >= 0.0)
  {
   _GLF_color = vec4(1.0);
  }
 if(gl_FragCoord.x < 0.0)
  {
   return;
  }
 _GLF_color = c;
}
