#version 320 es

#ifndef REDUCER
#define _GLF_ZERO(X, Y)                   (Y)
#define _GLF_ONE(X, Y)                    (Y)
#define _GLF_FALSE(X, Y)                  (Y)
#define _GLF_TRUE(X, Y)                   (Y)
#define _GLF_IDENTITY(X, Y)               (Y)
#define _GLF_DEAD(X)                      (X)
#define _GLF_FUZZED(X)                    (X)
#define _GLF_WRAPPED_LOOP(X)              X
#define _GLF_WRAPPED_IF_TRUE(X)           X
#define _GLF_WRAPPED_IF_FALSE(X)          X
#define _GLF_SWITCH(X)                    X
#define _GLF_MAKE_IN_BOUNDS_INT(IDX, SZ)  clamp(IDX, 0, SZ - 1)
#define _GLF_MAKE_IN_BOUNDS_UINT(IDX, SZ) clamp(IDX, 0u, SZ - 1u)
#endif

// END OF GENERATED HEADER
precision highp float;

precision highp int;

layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 1) uniform buf1 {
 vec2 resolution;
};
int map[16 * 16];

void main()
{
 vec2 pos = gl_FragCoord.xy / resolution;
 if(_GLF_DEAD(false))
  {
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     if(_GLF_DEAD(_GLF_IDENTITY(false, ! (! (false)))))
      return;
    }
   else
    {
    }
   return;
  }
 if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    return;
  }
 else
  {
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  for(int _injected_loop_counter = int(_GLF_ONE(1.0, injectionSwitch.y)); _GLF_WRAPPED_LOOP(_injected_loop_counter > (0 >> _GLF_IDENTITY(int(6), int(6)))); _injected_loop_counter --)
   {
    _GLF_color = vec4(469.317, 3.5, -94.98, 3574.6099);
   }
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    do
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
    while(_GLF_WRAPPED_LOOP(false));
   }
 }
 ivec2 ipos = ivec2(int(pos.x * 16.0), int(pos.y * 16.0));
 if(_GLF_DEAD(false))
  return;
 int i;
 if(_GLF_WRAPPED_IF_TRUE(true))
  {
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    for(int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x)); _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
     {
      _GLF_color = vec4(426.377, -22.23, 980.374, -5.7);
     }
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      do
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
      while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
     }
   }
   do
    {
     if(_GLF_DEAD(false))
      {
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = (+ vec4(vec2(8.8, 10.86), 5663.7422, -5.9));
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          do
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
          while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
         }
       }
       for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
        {
         return;
        }
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       if(_GLF_DEAD(false))
        break;
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        {
         if(_GLF_DEAD(false))
          {
           {
            vec4 _GLF_outVarBackup_GLF_color;
            _GLF_outVarBackup_GLF_color = _GLF_color;
            _GLF_color = asinh(trunc(vec4(24.49, 4.4, -6194.6471, -9.9)));
            if(_GLF_WRAPPED_IF_TRUE(true))
             {
              _GLF_color = _GLF_outVarBackup_GLF_color;
             }
           }
           discard;
          }
         {
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = vec4(-1.2, -6454.5667, -8.9, -5.1);
          if(_GLF_WRAPPED_IF_TRUE(true))
           {
            if(_GLF_WRAPPED_IF_TRUE(true))
             {
              _GLF_color = _GLF_outVarBackup_GLF_color;
             }
            else
             {
             }
           }
         }
         return;
        }
       return;
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      continue;
    }
   while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < abs(0.0)))));
  }
 else
  {
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < sqrt(0.0)))))
  {
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(-460.261, -655.354, -430.344, 1470.7667);
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   do
    {
     return;
    }
   while(_GLF_WRAPPED_LOOP(false));
  }
 do
  {
   do
    {
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
      {
       do
        {
         for(int _injected_loop_counter = ((1 << _GLF_IDENTITY(int(7), int(7))) >> _GLF_IDENTITY(int(7), int(7))); _GLF_WRAPPED_LOOP(_injected_loop_counter > (0 << _GLF_IDENTITY(int(3), int(3)))); _injected_loop_counter --)
          {
           for(           i = 0;
 i < 16 * 16; i ++)
            {
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
              {
               if(_GLF_WRAPPED_IF_TRUE(true))
                {
                 if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                  {
                  }
                 else
                  {
                   discard;
                  }
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                  break;
                 if(_GLF_DEAD(false))
                  discard;
                 {
                  vec4 _GLF_outVarBackup_GLF_color;
                  _GLF_outVarBackup_GLF_color = _GLF_color;
                  _GLF_color = vec4(-564.758, -4181.8402, -5.8, -3.8);
                  if(_GLF_WRAPPED_IF_TRUE(true))
                   {
                    _GLF_color = _GLF_outVarBackup_GLF_color;
                   }
                 }
                }
               else
                {
                }
              }
             map[i] = 0;
            }
          }
         {
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
           {
            for(int _injected_loop_counter = (1 & 1); _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
             {
              _GLF_color = vec4(-4.8, 869.480, 535.060, 4.4);
             }
           }
          if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
           {
            {
             vec4 _GLF_outVarBackup_GLF_color;
             _GLF_outVarBackup_GLF_color = _GLF_color;
             if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
              {
              }
             else
              {
               _GLF_color = ((1226.7255 / mat3x4(3.2, -196.998, -2.9, -60.26, -1.0, -2616.8625, -845.786, 98.72, -3.5, 761.953, 1658.1342, 4250.7300)) * vec3(272.488, 263.214, 718.186));
              }
             if(_GLF_WRAPPED_IF_TRUE(true))
              {
               for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != _GLF_IDENTITY(0, int(ivec2(_GLF_IDENTITY(0, clamp(0, 0, 0)), 0)))); _injected_loop_counter --)
                {
                 _GLF_color = _GLF_outVarBackup_GLF_color;
                }
              }
            }
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
        }
       while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
      }
     else
      {
      }
     if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_IDENTITY(dot(vec4(1.0, 0.0, abs(1.0), 0.0), vec4(0.0, 1.0, 0.0, 1.0)), dot(vec4(1.0, 0.0, abs(1.0), 0.0), vec4(0.0, 1.0, 0.0, 1.0)))))))
      {
      }
     else
      {
       if(_GLF_WRAPPED_IF_FALSE(false))
        {
        }
       else
        {
         if(_GLF_DEAD(false))
          discard;
        }
      }
    }
   while(_GLF_WRAPPED_LOOP(false));
  }
 while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
 if(_GLF_DEAD(false))
  {
   if(_GLF_WRAPPED_IF_FALSE(false))
    {
    }
   else
    {
     return;
     {
      vec4 _GLF_outVarBackup_GLF_color;
      for(int _injected_loop_counter = int(_GLF_ONE(1.0, injectionSwitch.y)); _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
       {
        _GLF_outVarBackup_GLF_color = _GLF_color;
       }
      _GLF_color = vec4(7.9, -2.5, -50.58, 1793.9843);
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
    }
  }
 ivec2 p = ivec2(0, 0);
 for(int _injected_loop_counter = ((1 << _GLF_IDENTITY(int(5), int(5))) >> _GLF_IDENTITY(int(5), int(5))); _GLF_WRAPPED_LOOP(_injected_loop_counter != (0 | 0)); _injected_loop_counter --)
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(-5.7, -7.5, 62.37, -6.4);
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     return;
    }
  }
 bool canwalk = true;
 if(_GLF_WRAPPED_IF_TRUE(true))
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
    {
     if(_GLF_DEAD(false))
      {
       for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
        {
         return;
        }
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(402.404, -9.0, -9.5, 696.635);
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
      }
    }
   else
    {
    }
   _GLF_color = vec4(-2148.2913, -7.5, 84.57, 8.6);
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    return;
   do
    {
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       if(_GLF_WRAPPED_IF_FALSE(false))
        {
        }
       else
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          {
           if(_GLF_WRAPPED_IF_TRUE(true))
            {
             return;
            }
           else
            {
            }
          }
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
            {
             if(_GLF_DEAD(false))
              return;
            }
           else
            {
            }
           {
            vec4 _GLF_outVarBackup_GLF_color;
            _GLF_outVarBackup_GLF_color = _GLF_color;
            _GLF_color = vec4(6502.1482, -6.3, -1.5, -3.3);
            {
             vec4 _GLF_outVarBackup_GLF_color;
             _GLF_outVarBackup_GLF_color = _GLF_color;
             _GLF_color = vec4(7.1, -7.3, 4573.8404, (+ 130.319));
             if(_GLF_WRAPPED_IF_TRUE(true))
              {
               if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= sqrt(0.0)))))
                {
                 _GLF_color = _GLF_outVarBackup_GLF_color;
                }
              }
             else
              {
              }
            }
            if(_GLF_WRAPPED_IF_TRUE(true))
             {
              if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
               return;
             }
            else
             {
             }
            do
             {
              if(_GLF_WRAPPED_IF_TRUE(true))
               {
                _GLF_color = _GLF_outVarBackup_GLF_color;
               }
             }
            while(_GLF_WRAPPED_LOOP(false));
           }
           {
            if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
             return;
            vec4 _GLF_outVarBackup_GLF_color;
            _GLF_outVarBackup_GLF_color = _GLF_color;
            _GLF_color = degrees(vec4(288.165, -8920.4140, -1.1, -6.4));
            if(_GLF_WRAPPED_IF_TRUE(true))
             {
              _GLF_color = _GLF_outVarBackup_GLF_color;
              if(_GLF_DEAD(false))
               {
                if(_GLF_WRAPPED_IF_TRUE(true))
                 {
                  return;
                  {
                   vec4 _GLF_outVarBackup_GLF_color;
                   _GLF_outVarBackup_GLF_color = _GLF_color;
                   _GLF_color = vec4(67.34, 3.9, -0.6, 5.2);
                   if(_GLF_WRAPPED_IF_TRUE(true))
                    {
                     _GLF_color = _GLF_outVarBackup_GLF_color;
                    }
                  }
                 }
                else
                 {
                 }
               }
             }
           }
           for(int _injected_loop_counter = (0 & 18942); _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
            {
             _GLF_color = _GLF_outVarBackup_GLF_color;
            }
          }
         if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
          {
          }
         else
          {
           do
            {
             if(_GLF_DEAD(false))
              return;
            }
           while(_GLF_WRAPPED_LOOP(false));
          }
        }
       if(_GLF_DEAD(false))
        return;
      }
     else
      {
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
         return;
        _GLF_color = unpackSnorm4x8(15279u);
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
      }
    }
   while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
   if(_GLF_WRAPPED_IF_FALSE(false))
    {
    }
   else
    {
     if(_GLF_DEAD(false))
      return;
    }
  }
 else
  {
  }
 if(_GLF_WRAPPED_IF_TRUE(true))
  {
   if(_GLF_DEAD(false))
    return;
  }
 else
  {
  }
 {
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = degrees(exp(vec4(-137.486, 9.5, -0.6, 230.363)));
   if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = (+ vec4(-710.715, 1.6, 5.9, 4.1));
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    if(_GLF_DEAD(false))
     return;
    _GLF_color = _GLF_outVarBackup_GLF_color;
    if(_GLF_DEAD(false))
     return;
   }
 }
 int v = 0;
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(96.05, 98.85, -1.1, 8853.7674);
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 do
  {
   if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= abs(0.0)))))
    {
     v ++;
    }
   else
    {
    }
   int directions = 0;
   if(_GLF_WRAPPED_IF_FALSE(false))
    {
    }
   else
    {
     if(_GLF_DEAD(false))
      continue;
     do
      {
       do
        {
         if(p.x > 0 && map[(p.x - 2) + (p.y) * 16] == 0)
          {
           do
            {
             directions += 1;
            }
           while(_GLF_WRAPPED_LOOP(false));
          }
        }
       while(_GLF_WRAPPED_LOOP(false));
      }
     while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
    }
   if(_GLF_DEAD(false))
    continue;
   {
    if(_GLF_DEAD(false))
     discard;
    vec4 _GLF_outVarBackup_GLF_color;
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      break;
     vec4 _GLF_outVarBackup_GLF_color;
     if(_GLF_DEAD(false))
      break;
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        {
        }
       else
        {
         _GLF_outVarBackup_GLF_color = _GLF_color;
        }
      }
     else
      {
      }
     _GLF_color = mat4(3894.3695, 9602.2886, 6.0, -4.9, 239.174, -1.7, -0.5, -7953.1872, -95.95, 843.988, 44.24, 5.5, 8.4, -2.2, -871.751, -3.1)[1];
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(-3.2, 7.4, -0.7, 2022.0813);
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     if(_GLF_DEAD(false))
      break;
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
       if(_GLF_DEAD(false))
        discard;
      }
    }
    _GLF_outVarBackup_GLF_color = _GLF_color;
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = (mat3x4(8992.1101, -5.8, -9639.9315, -6654.0000, 3095.7019, 1.6, 78.20, 48.12, -472.186, 139.432, 848.860, 933.909) * vec3(-9.9, -403.644, -11.03));
     if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      {
      }
     else
      {
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         {
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = inversesqrt(vec4(7.3, 162.771, -53.50, -2.5));
          if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, (true) && true)))
           {
            do
             {
              _GLF_color = _GLF_outVarBackup_GLF_color;
             }
            while(_GLF_WRAPPED_LOOP(false));
           }
         }
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
    }
    if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     {
     }
    else
     {
      if(_GLF_DEAD(false))
       {
        for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != int(_GLF_ZERO(0.0, injectionSwitch.x))); _injected_loop_counter --)
         {
          do
           {
            return;
           }
          while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
         }
       }
     }
    _GLF_color = clamp(vec4(7.8, 4.8, 7.5, 0.9), vec4(544.461, 1.3, 348.562, -0.8), roundEven((mat2x4(-5340.2686, -900.876, -81.59, 88.06, -0.4, -987.528, -5116.7049, 3546.8410) * vec2(-50.43, 7.4))));
    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
      for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != _GLF_IDENTITY(0, min(0, 0))); _injected_loop_counter --)
       {
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
         {
          if(_GLF_DEAD(false))
           {
            {
             vec4 _GLF_outVarBackup_GLF_color;
             _GLF_outVarBackup_GLF_color = _GLF_color;
             _GLF_color = vec3(-7.5, 1966.8348, 0.6).zyyy;
             if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
              {
               if(_GLF_WRAPPED_IF_TRUE(true))
                {
                 _GLF_color = _GLF_outVarBackup_GLF_color;
                }
               else
                {
                }
              }
            }
            return;
           }
         }
        else
         {
         }
       }
     }
   }
   if(p.y > 0 && map[(p.x) + (p.y - 2) * 16] == 0)
    {
     directions += 1;
     if(_GLF_DEAD(false))
      break;
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = sin(vec4(9.3, -0.9, 8.8, 8569.4218));
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
       {
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
        else
         {
         }
       }
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       do
        {
         _GLF_color = degrees(vec4(-1.8, -213.632, -7738.6927, 246.824));
        }
       while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         for(int _injected_loop_counter = int(_GLF_ONE(1.0, injectionSwitch.y)); _GLF_WRAPPED_LOOP(_injected_loop_counter > int(_GLF_ZERO(0.0, injectionSwitch.x))); _injected_loop_counter --)
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
      }
     }
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        {
        }
       else
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = vec4(33.55, -81.67, 4488.7998, -2569.4436);
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= log(1.0)))))
            {
             _GLF_color = _GLF_outVarBackup_GLF_color;
            }
           else
            {
            }
          }
        }
       if(_GLF_DEAD(false))
        continue;
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(3.6, 7.4, 4.0, 4134.5986);
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
         {
          if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
          else
           {
           }
         }
       }
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         for(int _injected_loop_counter = (0 >> _GLF_IDENTITY(int(3), int(3))); _GLF_WRAPPED_LOOP(_injected_loop_counter < int(_GLF_ONE(1.0, injectionSwitch.y))); _injected_loop_counter ++)
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
            return;
           {
            vec4 _GLF_outVarBackup_GLF_color;
            _GLF_outVarBackup_GLF_color = _GLF_color;
            _GLF_color = log2(vec4(5.8, 6.0, 6.6, -571.195));
            if(_GLF_WRAPPED_IF_TRUE(true))
             {
              _GLF_color = _GLF_outVarBackup_GLF_color;
             }
           }
          }
        }
       else
        {
        }
       {
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          vec4 _GLF_outVarBackup_GLF_color;
          do
           {
            _GLF_outVarBackup_GLF_color = _GLF_color;
           }
          while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
          _GLF_color = atan(vec4(300.964, -5.8, 356.397, 9200.5067));
          if(_GLF_WRAPPED_IF_TRUE(true))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
        else
         {
         }
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = asin(vec4(-660.243, 7.1, 8.5, -0.4));
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
          if(_GLF_DEAD(false))
           break;
         }
       }
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = roundEven(vec4(-82.34, -306.781, -9173.1634, 4695.4622));
        }
       else
        {
        }
       {
        vec4 _GLF_outVarBackup_GLF_color;
        do
         {
          _GLF_outVarBackup_GLF_color = _GLF_color;
         }
        while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
        if(_GLF_DEAD(false))
         discard;
        do
         {
          _GLF_color = min(vec4(-885.531, 1.6, -77.32, 80.34), vec4(-859.223, -669.274, -9098.9209, 293.539));
         }
        while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
       }
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
     else
      {
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      continue;
    }
   do
    {
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       if(_GLF_DEAD(false))
        discard;
      }
     else
      {
      }
    }
   while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < tan(_GLF_ZERO(0.0, injectionSwitch.x))))));
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(303.944, vec3(2039.7112, 568.283, -96.62));
    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    break;
   do
    {
     if(p.x < 14 && map[(p.x + 2) + (p.y) * 16] == 0)
      {
       do
        {
         directions += 1;
        }
       while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
      }
    }
   while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
   if(p.y < 14 && map[(p.x) + (p.y + 2) * 16] == 0)
    {
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       directions += 1;
      }
     else
      {
      }
     do
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = mix(atanh(vec4(-76.77, -5777.0640, -47.71, 8.6)), vec4(9.5, 519.240, -601.064, 9.1), -7625.9517);
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
     while(_GLF_WRAPPED_LOOP(false));
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    continue;
   if(_GLF_DEAD(false))
    break;
   if(directions == 0)
    {
     for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > (0 | 0)); _injected_loop_counter --)
      {
       if(_GLF_DEAD(false))
        continue;
       canwalk = false;
      }
     int j;
     for(     i = 0;
 i < 8; i ++)
      {
       if(_GLF_DEAD(false))
        {
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           if(_GLF_DEAD(false))
            discard;
          }
         else
          {
          }
         break;
        }
       if(_GLF_WRAPPED_IF_FALSE(false))
        {
        }
       else
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = (reflect(vec4(-0.2, 2.9, 70.86, -501.480), vec4(-6579.2437, -90.70, 1.8, 4.3)) * 8.3);
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
       for(       j = 0;
 j < 8; j ++)
        {
         if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
          {
           if(map[j * 2 + i * 2 * 16] == 0)
            {
             do
              {
               {
                vec4 _GLF_outVarBackup_GLF_color;
                _GLF_outVarBackup_GLF_color = _GLF_color;
                _GLF_color = vec4(0.8, 2.7, 8.0, 9513.9967);
                if(_GLF_WRAPPED_IF_TRUE(true))
                 {
                  _GLF_color = _GLF_outVarBackup_GLF_color;
                 }
               }
               p.x = j * 2;
              }
             while(_GLF_WRAPPED_LOOP(false));
             if(_GLF_DEAD(false))
              break;
             do
              {
               vec4 _GLF_outVarBackup_GLF_color;
               _GLF_outVarBackup_GLF_color = _GLF_color;
               _GLF_color = vec4(7.6, 681.555, -9337.6667, 571.903);
               if(_GLF_WRAPPED_IF_TRUE(true))
                {
                 _GLF_color = _GLF_outVarBackup_GLF_color;
                }
              }
             while(_GLF_WRAPPED_LOOP(false));
             p.y = i * 2;
             {
              vec4 _GLF_outVarBackup_GLF_color;
              if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
               {
                {
                 vec4 _GLF_outVarBackup_GLF_color;
                 _GLF_outVarBackup_GLF_color = _GLF_color;
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                  break;
                 _GLF_color = vec4(5.1, 340.857, 210.804, 3153.2138);
                 if(_GLF_WRAPPED_IF_TRUE(true))
                  {
                   _GLF_color = _GLF_outVarBackup_GLF_color;
                  }
                }
               }
              else
               {
                _GLF_outVarBackup_GLF_color = _GLF_color;
               }
              for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != int(_GLF_ZERO(0.0, injectionSwitch.x))); _injected_loop_counter --)
               {
                if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                 return;
               }
              if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
               {
                _GLF_color = vec4(-26.17, 2077.6927, 979.325, 87.49);
               }
              else
               {
               }
              if(_GLF_WRAPPED_IF_TRUE(true))
               {
                if(_GLF_DEAD(false))
                 return;
                if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
                 {
                  vec4 _GLF_outVarBackup_GLF_color;
                  do
                   {
                    do
                     {
                      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
                       {
                        vec4 _GLF_outVarBackup_GLF_color;
                        if(_GLF_WRAPPED_IF_FALSE(false))
                         {
                         }
                        else
                         {
                          _GLF_outVarBackup_GLF_color = _GLF_color;
                         }
                        for(int _injected_loop_counter = int(_GLF_ONE(1.0, injectionSwitch.y)); _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
                         {
                          _GLF_color = pow(vec4(6.4, 21.44, -7100.0367, 2.7), vec4(9.0, 1.9, -19.90, 7.1));
                         }
                        if(_GLF_WRAPPED_IF_TRUE(true))
                         {
                          _GLF_color = _GLF_outVarBackup_GLF_color;
                         }
                       }
                      else
                       {
                       }
                      {
                       vec4 _GLF_outVarBackup_GLF_color;
                       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                        continue;
                       _GLF_outVarBackup_GLF_color = _GLF_color;
                       for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
                        {
                         if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
                          {
                           _GLF_color = step((vec4(7543.4718, 8446.6302, -95.70, -970.349) / vec4(-6.4, -99.48, -8373.0899, -521.636)), vec4(64.14, 9321.2931, -9.6, -92.36));
                          }
                         else
                          {
                          }
                        }
                       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
                        {
                         do
                          {
                           _GLF_color = _GLF_outVarBackup_GLF_color;
                          }
                         while(_GLF_WRAPPED_LOOP(false));
                         if(_GLF_DEAD(false))
                          continue;
                         {
                          {
                           vec4 _GLF_outVarBackup_GLF_color;
                           _GLF_outVarBackup_GLF_color = _GLF_color;
                           _GLF_color = vec4(-2.3, 26.70, 311.915, 4.5);
                           do
                            {
                             if(_GLF_WRAPPED_IF_TRUE(true))
                              {
                               _GLF_color = _GLF_outVarBackup_GLF_color;
                              }
                            }
                           while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
                          }
                          vec4 _GLF_outVarBackup_GLF_color;
                          _GLF_outVarBackup_GLF_color = _GLF_color;
                          for(int _injected_loop_counter = _GLF_IDENTITY(0, (0) + 0); _GLF_WRAPPED_LOOP(_injected_loop_counter != _GLF_IDENTITY(1, (1) | 0)); _injected_loop_counter ++)
                           {
                            _GLF_color = mat3x4(-10.63, 7.1, 22.29, 957.512, 38.67, -8035.3605, -7784.9949, -5416.4883, -58.07, -778.916, -6.9, -3.6)[1];
                           }
                          if(_GLF_DEAD(false))
                           break;
                          if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
                           {
                            _GLF_color = _GLF_outVarBackup_GLF_color;
                           }
                         }
                        }
                       {
                        vec4 _GLF_outVarBackup_GLF_color;
                        if(_GLF_DEAD(false))
                         return;
                        _GLF_outVarBackup_GLF_color = _GLF_color;
                        _GLF_color = reflect(vec4(59.29, 69.50, -24.66, -722.608), vec4(-0.0, -3027.7742, 2407.5586, -435.429));
                        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
                         {
                          if(_GLF_WRAPPED_IF_FALSE(false))
                           {
                           }
                          else
                           {
                            _GLF_color = _GLF_outVarBackup_GLF_color;
                           }
                         }
                       }
                      }
                      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
                       {
                        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                         {
                          if(_GLF_WRAPPED_IF_FALSE(false))
                           {
                           }
                          else
                           {
                            return;
                           }
                         }
                       }
                      else
                       {
                       }
                      do
                       {
                        _GLF_outVarBackup_GLF_color = _GLF_color;
                       }
                      while(_GLF_WRAPPED_LOOP(false));
                      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
                       {
                        vec4 _GLF_outVarBackup_GLF_color;
                        _GLF_outVarBackup_GLF_color = _GLF_color;
                        _GLF_color = vec4(-4.4, -0.3, -1754.6865, -22.57);
                        {
                         vec4 _GLF_outVarBackup_GLF_color;
                         do
                          {
                           _GLF_outVarBackup_GLF_color = _GLF_color;
                          }
                         while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
                         _GLF_color = vec4(1609.5165, -1.9, 9.7, 28.45);
                         if(_GLF_WRAPPED_IF_TRUE(true))
                          {
                           _GLF_color = _GLF_outVarBackup_GLF_color;
                          }
                        }
                        if(_GLF_WRAPPED_IF_TRUE(true))
                         {
                          if(_GLF_DEAD(false))
                           discard;
                          _GLF_color = _GLF_outVarBackup_GLF_color;
                         }
                       }
                      else
                       {
                       }
                      {
                       vec4 _GLF_outVarBackup_GLF_color;
                       for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != ((_GLF_IDENTITY(1, (1) + 0) << _GLF_IDENTITY(int(2), _GLF_IDENTITY(int(2), (int(2)) / 1))) >> _GLF_IDENTITY(int(2), int(2)))); _injected_loop_counter ++)
                        {
                         _GLF_outVarBackup_GLF_color = _GLF_color;
                        }
                       _GLF_color = vec4(-91.05, -33.63, 54.97, 4.1);
                       if(_GLF_WRAPPED_IF_TRUE(true))
                        {
                         _GLF_color = _GLF_outVarBackup_GLF_color;
                        }
                      }
                     }
                    while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
                    if(_GLF_DEAD(false))
                     discard;
                    do
                     {
                      vec4 _GLF_outVarBackup_GLF_color;
                      _GLF_outVarBackup_GLF_color = _GLF_color;
                      _GLF_color = degrees(vec4(49.68, 2.2, 183.975, 4123.2312));
                      for(int _injected_loop_counter = (0 << _GLF_IDENTITY(int(2), int(2))); _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
                       {
                        if(_GLF_WRAPPED_IF_TRUE(true))
                         {
                          _GLF_color = _GLF_outVarBackup_GLF_color;
                         }
                       }
                     }
                    while(_GLF_WRAPPED_LOOP(false));
                   }
                  while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
                  if(_GLF_DEAD(false))
                   {
                    for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > (0 << _GLF_IDENTITY(int(8), int(8)))); _injected_loop_counter --)
                     {
                      discard;
                     }
                   }
                  {
                   vec4 _GLF_outVarBackup_GLF_color;
                   _GLF_outVarBackup_GLF_color = _GLF_color;
                   _GLF_color = atan(vec4(-4.9, 8.7, -7.9, 3188.6128), vec4(842.438, 3.1, -5056.3500, 1873.6860));
                   if(_GLF_WRAPPED_IF_TRUE(true))
                    {
                     _GLF_color = _GLF_outVarBackup_GLF_color;
                    }
                  }
                  _GLF_color = vec4(3.2, 9145.8739, 58.13, 10.04);
                  if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                   {
                   }
                  else
                   {
                    do
                     {
                      if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                       {
                        if(_GLF_WRAPPED_IF_FALSE(false))
                         {
                         }
                        else
                         {
                          discard;
                         }
                       }
                     }
                    while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
                    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
                     {
                      do
                       {
                        _GLF_color = _GLF_outVarBackup_GLF_color;
                        if(_GLF_DEAD(_GLF_IDENTITY(false, true && (false))))
                         continue;
                       }
                      while(_GLF_WRAPPED_LOOP(_GLF_IDENTITY(false, ! (_GLF_IDENTITY(! (false), bool(bvec2(! (false), true)))))));
                      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                       return;
                     }
                   }
                 }
                else
                 {
                  if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                   {
                   }
                  else
                   {
                    vec4 _GLF_outVarBackup_GLF_color;
                    _GLF_outVarBackup_GLF_color = _GLF_color;
                    _GLF_color = max((vec4(-6.5, 76.56, -6.4, 3776.5162) * 898.954), vec4(2.7, -7241.6776, -0.7, 5482.2604));
                    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= abs(0.0)))))
                     {
                      _GLF_color = _GLF_outVarBackup_GLF_color;
                     }
                   }
                 }
                _GLF_color = _GLF_outVarBackup_GLF_color;
               }
              if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
               {
                vec4 _GLF_outVarBackup_GLF_color;
                _GLF_outVarBackup_GLF_color = _GLF_color;
                _GLF_color = reflect(vec4(-6512.4330, 406.096, 7.0, 157.668), max(vec4(-1784.5280, 15.70, 1.2, 44.57), vec4(394.789, 1.1, -68.18, 3.0)));
                if(_GLF_WRAPPED_IF_TRUE(true))
                 {
                  _GLF_color = _GLF_outVarBackup_GLF_color;
                 }
               }
              else
               {
               }
             }
             canwalk = true;
            }
          }
         else
          {
           {
            vec4 _GLF_outVarBackup_GLF_color;
            do
             {
              _GLF_outVarBackup_GLF_color = _GLF_color;
             }
            while(_GLF_WRAPPED_LOOP(false));
            if(_GLF_WRAPPED_IF_FALSE(false))
             {
             }
            else
             {
              _GLF_color = vec4(4028.4038, -979.330, -922.655, -6884.8355);
             }
            if(_GLF_WRAPPED_IF_TRUE(true))
             {
              _GLF_color = _GLF_outVarBackup_GLF_color;
             }
           }
          }
         do
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
            return;
           for(int _injected_loop_counter = int(_GLF_ONE(1.0, injectionSwitch.y)); _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
            {
             vec4 _GLF_outVarBackup_GLF_color;
             _GLF_outVarBackup_GLF_color = _GLF_color;
             _GLF_color = vec4(8572.7239, -7.1, 1.3, 4.1);
             if(_GLF_WRAPPED_IF_TRUE(true))
              {
               _GLF_color = _GLF_outVarBackup_GLF_color;
              }
            }
           if(_GLF_DEAD(false))
            discard;
          }
         while(_GLF_WRAPPED_LOOP(false));
         if(_GLF_DEAD(false))
          break;
         if(_GLF_DEAD(false))
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
            return;
           {
            vec4 _GLF_outVarBackup_GLF_color;
            if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
             discard;
            _GLF_outVarBackup_GLF_color = _GLF_color;
            do
             {
              _GLF_color = vec4(-0.3, 9.5, -1.3, -144.608);
             }
            while(_GLF_WRAPPED_LOOP(false));
            if(_GLF_WRAPPED_IF_TRUE(true))
             {
              _GLF_color = _GLF_outVarBackup_GLF_color;
             }
           }
           break;
          }
         if(_GLF_DEAD(false))
          continue;
        }
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec2(0.4, 8.1).ggrg;
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
      }
     if(_GLF_DEAD(false))
      return;
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= log(1.0)))))
       {
        _GLF_color = vec4(-230.959, -4.4, -6.2, -625.812);
       }
      else
       {
       }
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     map[(p.x) + (p.y) * 16] = 1;
     if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      {
       if(_GLF_DEAD(false))
        break;
      }
     else
      {
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(false))
          break;
         continue;
         {
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = asinh(max(round(vec4(-821.180, 490.882, -97.36, -351.981)), vec4(-2.9, -4.9, 0.7, -3888.7253)));
          do
           {
            if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, (true) || false)))
             {
              do
               {
                _GLF_color = _GLF_outVarBackup_GLF_color;
               }
              while(_GLF_WRAPPED_LOOP(false));
              {
               vec4 _GLF_outVarBackup_GLF_color;
               _GLF_outVarBackup_GLF_color = _GLF_color;
               _GLF_color = vec4(-8.8, -223.098, -1.9, -6361.8289);
               if(_GLF_WRAPPED_IF_TRUE(true))
                {
                 _GLF_color = _GLF_outVarBackup_GLF_color;
                }
              }
             }
           }
          while(_GLF_WRAPPED_LOOP(false));
         }
        }
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        if(_GLF_DEAD(false))
         continue;
        _GLF_color = vec4(-42.67, 3.5, -575.608, -3.6);
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          if(_GLF_WRAPPED_IF_FALSE(false))
           {
           }
          else
           {
            if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
             {
             }
            else
             {
              if(_GLF_DEAD(false))
               discard;
             }
           }
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < determinant(mat4(0.0, _GLF_ONE(1.0, injectionSwitch.y), 0.0, 0.0, 0.0, 0.0, _GLF_IDENTITY(dot(vec3(1.0, 1.0, 0.0), vec3(0.0, 0.0, 1.0)), dot(vec3(1.0, 1.0, 0.0), vec3(0.0, 0.0, 1.0))), 1.0, 0.0, 0.0, 0.0, 0.0, sqrt(0.0), 0.0, 0.0, 0.0))))))
          break;
         _GLF_color = vec4(4179.5242, -56.31, -189.392, 4.1);
         do
          {
           if(_GLF_WRAPPED_IF_TRUE(true))
            {
             _GLF_color = _GLF_outVarBackup_GLF_color;
            }
          }
         while(_GLF_WRAPPED_LOOP(false));
        }
       }
       for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < ((1 << _GLF_IDENTITY(int(1), int(1))) >> _GLF_IDENTITY(int(1), int(1)))); _injected_loop_counter ++)
        {
         if(_GLF_DEAD(false))
          return;
        }
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        {
         {
          vec4 _GLF_outVarBackup_GLF_color;
          if(_GLF_DEAD(false))
           continue;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = (-9861.4452 * vec4(-0.4, 508.857, 86.99, -8989.0610));
          if(_GLF_DEAD(false))
           continue;
          if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
           {
            {
             vec4 _GLF_outVarBackup_GLF_color;
             _GLF_outVarBackup_GLF_color = _GLF_color;
             _GLF_color = vec4(3439.7937, 7822.3211, 7267.0303, -9.3);
             if(_GLF_WRAPPED_IF_TRUE(true))
              {
               _GLF_color = _GLF_outVarBackup_GLF_color;
              }
            }
            _GLF_color = _GLF_outVarBackup_GLF_color;
            {
             vec4 _GLF_outVarBackup_GLF_color;
             _GLF_outVarBackup_GLF_color = _GLF_color;
             _GLF_color = (-3.6 - vec4(-7522.3749, -2.3, 25.47, -1.9));
             if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
              {
               _GLF_color = _GLF_outVarBackup_GLF_color;
              }
            }
           }
         }
         discard;
        }
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(-8.1, 432.402, 2.8, -9.1);
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
          {
           vec4 _GLF_outVarBackup_GLF_color;
           if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
            {
             _GLF_outVarBackup_GLF_color = _GLF_color;
            }
           else
            {
            }
           _GLF_color = (450.579 - vec4(-9362.6030, -9.0, 84.06, -9.5));
           if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, (true) || false)))
            {
             _GLF_color = _GLF_outVarBackup_GLF_color;
            }
          }
         }
       }
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        break;
       _GLF_color = (vec3(6030.5480, -0.2, 4.7) * mat4x3(5.7, -2.1, -86.66, 2.6, 2.2, -3.4, 30.99, -825.512, 0.5, -5807.7188, 6433.0638, -4768.6942));
       if(_GLF_DEAD(false))
        break;
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
     if(_GLF_DEAD(false))
      {
       for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
        {
         discard;
        }
      }
    }
   else
    {
     {
      vec4 _GLF_outVarBackup_GLF_color;
      if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < abs(0.0)))))
       {
       }
      else
       {
        do
         {
          if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
           continue;
          if(_GLF_DEAD(false))
           {
            if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
             {
              vec4 _GLF_outVarBackup_GLF_color;
              _GLF_outVarBackup_GLF_color = _GLF_color;
              _GLF_color = vec4(8.1, -85.76, -2.2, 8.0);
              for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
               {
                if(_GLF_WRAPPED_IF_TRUE(true))
                 {
                  _GLF_color = _GLF_outVarBackup_GLF_color;
                 }
               }
             }
            else
             {
             }
            if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
             continue;
            {
             vec4 _GLF_outVarBackup_GLF_color;
             _GLF_outVarBackup_GLF_color = _GLF_color;
             _GLF_color = vec4(19.98, 62.78, -24.82, 51.27);
             if(_GLF_WRAPPED_IF_TRUE(true))
              {
               if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= _GLF_ZERO(0.0, injectionSwitch.x)))))
                {
                 _GLF_color = _GLF_outVarBackup_GLF_color;
                }
               else
                {
                }
              }
            }
            for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
             {
              vec4 _GLF_outVarBackup_GLF_color;
              _GLF_outVarBackup_GLF_color = _GLF_color;
              _GLF_color = vec4(-592.137, 33.47, -9.6, -7228.3239);
              if(_GLF_WRAPPED_IF_TRUE(true))
               {
                _GLF_color = _GLF_outVarBackup_GLF_color;
               }
             }
            return;
           }
          if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
           {
           }
          else
           {
            for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
             {
              for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > (int(_GLF_ZERO(0.0, injectionSwitch.x)) >> _GLF_IDENTITY(int(8), int(8)))); _injected_loop_counter --)
               {
                do
                 {
                  for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
                   {
                    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                     return;
                   }
                 }
                while(_GLF_WRAPPED_LOOP(_GLF_IDENTITY(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)), bool(bvec4(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)), false, false, true)))));
                if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < log(1.0)))))
                 {
                  do
                   {
                    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
                     {
                      discard;
                     }
                    else
                     {
                     }
                   }
                  while(_GLF_WRAPPED_LOOP(false));
                 }
               }
              _GLF_outVarBackup_GLF_color = _GLF_color;
              if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
               break;
              if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
               {
               }
              else
               {
                do
                 {
                  if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                   {
                   }
                  else
                   {
                    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_ZERO(0.0, injectionSwitch.x)))))
                     {
                      if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                       {
                       }
                      else
                       {
                        return;
                       }
                     }
                   }
                 }
                while(_GLF_WRAPPED_LOOP(false));
                vec4 _GLF_outVarBackup_GLF_color;
                if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= abs(0.0)))))
                 {
                  _GLF_outVarBackup_GLF_color = _GLF_color;
                 }
                else
                 {
                 }
                _GLF_color = vec4(54.11, 6.2, 84.75, -1571.7776);
                if(_GLF_WRAPPED_IF_TRUE(true))
                 {
                  _GLF_color = _GLF_outVarBackup_GLF_color;
                 }
               }
              if(_GLF_DEAD(false))
               break;
             }
           }
         }
        while(_GLF_WRAPPED_LOOP(false));
       }
      if(_GLF_DEAD(false))
       {
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = vec4(-6.7, 8.8, -609.241, 338.527);
          if(_GLF_WRAPPED_IF_TRUE(true))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
        else
         {
         }
        continue;
       }
      if(_GLF_DEAD(false))
       continue;
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
       {
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
         {
          if(_GLF_DEAD(false))
           break;
          discard;
         }
        return;
        if(_GLF_DEAD(false))
         discard;
       }
      for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
       {
        if(_GLF_DEAD(false))
         discard;
        _GLF_color = (vec4(1128.9728, -473.629, 37.81, 6210.3390) * vec4(478.167, 1.7, -0.2, -812.801));
       }
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(-310.916, -3.0, 0.4, -458.436);
       do
        {
         if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= sin(abs(0.0))))))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
           if(_GLF_DEAD(false))
            {
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < sin(0.0)))))
              break;
             {
              vec4 _GLF_outVarBackup_GLF_color;
              _GLF_outVarBackup_GLF_color = _GLF_color;
              {
               vec4 _GLF_outVarBackup_GLF_color;
               _GLF_outVarBackup_GLF_color = _GLF_color;
               _GLF_color = vec4(-0.8, 63.37, 6.9, -662.111);
               if(_GLF_WRAPPED_IF_TRUE(true))
                {
                 _GLF_color = _GLF_outVarBackup_GLF_color;
                }
              }
              _GLF_color = vec4(-4.8, -0.2, -6839.0604, 137.353);
              for(int _injected_loop_counter = (1 | int(_GLF_ZERO(0.0, injectionSwitch.x))); _GLF_WRAPPED_LOOP(_injected_loop_counter != int(_GLF_ZERO(0.0, injectionSwitch.x))); _injected_loop_counter --)
               {
                if(_GLF_WRAPPED_IF_FALSE(false))
                 {
                 }
                else
                 {
                  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= log(1.0)))))
                   {
                    if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                     {
                     }
                    else
                     {
                      _GLF_color = _GLF_outVarBackup_GLF_color;
                     }
                   }
                 }
               }
             }
             if(_GLF_DEAD(false))
              return;
             break;
            }
          }
        }
       while(_GLF_WRAPPED_LOOP(false));
      }
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
       {
        {
         vec4 _GLF_outVarBackup_GLF_color;
         if(_GLF_WRAPPED_IF_FALSE(false))
          {
          }
         else
          {
           _GLF_outVarBackup_GLF_color = _GLF_color;
          }
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          continue;
         if(_GLF_WRAPPED_IF_FALSE(false))
          {
          }
         else
          {
           vec4 _GLF_outVarBackup_GLF_color;
           _GLF_outVarBackup_GLF_color = _GLF_color;
           _GLF_color = (vec4(-1.1, -9.2, 77.14, -81.00));
           if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= _GLF_IDENTITY(dot(vec4(0.0, 1.0, 0.0, 0.0), vec4(1.0, 0.0, 1.0, _GLF_IDENTITY(dot(vec2(1.0, 0.0), vec2(1.0, 0.0)), dot(vec2(1.0, 0.0), vec2(1.0, 0.0))))), dot(vec4(0.0, 1.0, 0.0, 0.0), vec4(1.0, 0.0, 1.0, _GLF_IDENTITY(dot(vec2(1.0, 0.0), vec2(1.0, 0.0)), dot(vec2(1.0, 0.0), vec2(1.0, 0.0))))))))))
            {
             _GLF_color = _GLF_outVarBackup_GLF_color;
            }
          }
         _GLF_color = vec4(2.3, 2.2, 5.7, 6.6);
         {
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = asin(vec4(768.634, 39.59, 7.6, 4821.7290));
          if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
         if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
          {
           if(_GLF_DEAD(false))
            return;
           {
            vec4 _GLF_outVarBackup_GLF_color;
            if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < _GLF_IDENTITY(dot(vec2(0.0, 0.0), vec2(1.0, 1.0)), dot(vec2(0.0, 0.0), vec2(1.0, 1.0)))))))
             {
             }
            else
             {
              _GLF_outVarBackup_GLF_color = _GLF_color;
             }
            _GLF_color = vec4(5.2, 2.8, 407.976, -96.55);
            if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
             {
              _GLF_color = _GLF_outVarBackup_GLF_color;
             }
           }
           if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
            {
             {
              vec4 _GLF_outVarBackup_GLF_color;
              _GLF_outVarBackup_GLF_color = _GLF_color;
              _GLF_color = vec4(46.77, -1.7, -5.9, 268.779);
              if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= _GLF_ZERO(0.0, injectionSwitch.x)))))
               {
                _GLF_color = _GLF_outVarBackup_GLF_color;
               }
             }
            }
           else
            {
             _GLF_color = _GLF_outVarBackup_GLF_color;
            }
          }
        }
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < sin(0.0)))))
         return;
        _GLF_color = _GLF_outVarBackup_GLF_color;
        if(_GLF_DEAD(false))
         break;
        if(_GLF_DEAD(false))
         return;
       }
      if(_GLF_DEAD(false))
       continue;
      if(_GLF_WRAPPED_IF_FALSE(false))
       {
       }
      else
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(-4523.8668, 6.8, 5119.3379, -867.359);
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = mat4(-1.4, 4.3, -7.5, 61.47, -21.77, -68.75, -8.2, -5484.5673, -7.1, -1370.4545, 2.4, -39.49, -8727.2388, 1.1, 3336.1905, 466.811)[1];
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
            {
             _GLF_color = _GLF_outVarBackup_GLF_color;
            }
          }
         else
          {
          }
        }
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
         {
          for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
       }
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < length(determinant(mat3(0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0)))))))
       return;
     }
     int d = v % directions;
     v += directions;
     if(d >= 0 && p.x > 0 && map[(p.x - 2) + (p.y) * 16] == 0)
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < sqrt(0.0)))))
        break;
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         d --;
        }
       else
        {
        }
       map[(p.x) + (p.y) * 16] = 1;
       do
        {
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           for(int _injected_loop_counter = ((1 << _GLF_IDENTITY(int(4), int(4))) >> _GLF_IDENTITY(int(4), _GLF_IDENTITY(int(4), (int(4)) ^ 0))); _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
            {
             if(_GLF_DEAD(false))
              {
               if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                discard;
               if(_GLF_WRAPPED_IF_TRUE(true))
                {
                 vec4 _GLF_outVarBackup_GLF_color;
                 _GLF_outVarBackup_GLF_color = _GLF_color;
                 _GLF_color = fwidth(vec4(9939.2258, 488.648, -4.6, -4858.8181));
                 if(_GLF_WRAPPED_IF_TRUE(true))
                  {
                   if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
                    {
                     do
                      {
                       for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != int(_GLF_ZERO(0.0, injectionSwitch.x))); _injected_loop_counter --)
                        {
                         _GLF_color = _GLF_outVarBackup_GLF_color;
                        }
                      }
                     while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
                    }
                  }
                 else
                  {
                   do
                    {
                     vec4 _GLF_outVarBackup_GLF_color;
                     _GLF_outVarBackup_GLF_color = _GLF_color;
                     _GLF_color = abs(vec4(-713.471, 8.7, -835.723, 3.7));
                     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
                      {
                       _GLF_color = _GLF_outVarBackup_GLF_color;
                      }
                    }
                   while(_GLF_WRAPPED_LOOP(false));
                  }
                }
               else
                {
                }
               continue;
              }
             map[(p.x - 1) + (p.y) * 16] = 1;
            }
          }
         else
          {
          }
        }
       while(_GLF_WRAPPED_LOOP(false));
       if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        {
        }
       else
        {
         {
          vec4 _GLF_outVarBackup_GLF_color;
          {
           do
            {
             if(_GLF_WRAPPED_IF_FALSE(false))
              {
              }
             else
              {
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                return;
              }
            }
           while(_GLF_WRAPPED_LOOP(false));
           vec4 _GLF_outVarBackup_GLF_color;
           _GLF_outVarBackup_GLF_color = _GLF_color;
           _GLF_color = (- vec4(6.6, -6.5, -72.04, -827.425));
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
            continue;
           {
            vec4 _GLF_outVarBackup_GLF_color;
            _GLF_outVarBackup_GLF_color = _GLF_color;
            _GLF_color = dFdx(vec4(2.5, -8.7, 161.343, 759.087));
            if(_GLF_WRAPPED_IF_TRUE(true))
             {
              if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < tan(0.0)))))
               {
               }
              else
               {
                _GLF_color = _GLF_outVarBackup_GLF_color;
               }
             }
           }
           if(_GLF_WRAPPED_IF_TRUE(true))
            {
             _GLF_color = _GLF_outVarBackup_GLF_color;
            }
          }
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = acos(vec4(vec3(56.80, -764.518, 55.16), max(-2.6, -918.285)));
          do
           {
            if(_GLF_WRAPPED_IF_TRUE(true))
             {
              _GLF_color = _GLF_outVarBackup_GLF_color;
             }
           }
          while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
         }
         map[(p.x - 2) + (p.y) * 16] = 1;
        }
       p.x -= 2;
      }
     for(int _injected_loop_counter = (int(_GLF_ZERO(0.0, injectionSwitch.x)) << _GLF_IDENTITY(int(6), int(6))); _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
      {
       do
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          {
           {
            vec4 _GLF_outVarBackup_GLF_color;
            _GLF_outVarBackup_GLF_color = _GLF_color;
            _GLF_color = (+ vec4(-2.9, 9.7, -9.2, 33.01));
            if(_GLF_WRAPPED_IF_TRUE(true))
             {
              _GLF_color = _GLF_outVarBackup_GLF_color;
             }
           }
           return;
          }
        }
       while(_GLF_WRAPPED_LOOP(false));
      }
     if(d >= 0 && p.y > 0 && map[(p.x) + (p.y - 2) * 16] == 0)
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          discard;
         {
          {
           vec4 _GLF_outVarBackup_GLF_color;
           _GLF_outVarBackup_GLF_color = _GLF_color;
           _GLF_color = sinh(vec4(69.27, 5.0, -9.4, 4.8));
           if(_GLF_WRAPPED_IF_TRUE(true))
            {
             _GLF_color = _GLF_outVarBackup_GLF_color;
            }
          }
          vec4 _GLF_outVarBackup_GLF_color;
          if(_GLF_DEAD(false))
           continue;
          if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
           {
           }
          else
           {
            do
             {
              _GLF_outVarBackup_GLF_color = _GLF_color;
             }
            while(_GLF_WRAPPED_LOOP(false));
           }
          _GLF_color = mod(vec4(-9.7, 523.132, -11.17, 2.5), vec4(68.09, -4.8, 631.351, -0.8));
          if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
         {
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = vec4(38.26, 2.4, 8.7, 74.65);
          if(_GLF_WRAPPED_IF_TRUE(true))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
         continue;
        }
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = dFdx(vec4(-0.4, -2.9, 473.872, 9419.2970));
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= sin(0.0)))))
         {
          if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
          else
           {
           }
         }
       }
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
        {
         d --;
        }
       else
        {
        }
       map[(p.x) + (p.y) * 16] = 1;
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        continue;
       map[(p.x) + (p.y - 1) * 16] = 1;
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(0.6, -168.014, 9.7, -7888.3279);
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= _GLF_ZERO(0.0, injectionSwitch.x)))))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       do
        {
         map[(p.x) + (p.y - 2) * 16] = 1;
        }
       while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         {
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = vec4(651.314, 34.91, 417.845, 759.547);
          if(_GLF_WRAPPED_IF_TRUE(true))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
          {
           vec4 _GLF_outVarBackup_GLF_color;
           _GLF_outVarBackup_GLF_color = _GLF_color;
           _GLF_color = vec4(476.566, -1.0, -802.909, 795.510);
           for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != ((_GLF_IDENTITY(1, clamp(1, 1, 1)) << _GLF_IDENTITY(int(0), int(0))) >> _GLF_IDENTITY(int(0), int(0)))); _injected_loop_counter ++)
            {
             if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
              {
               if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                {
                }
               else
                {
                 _GLF_color = _GLF_outVarBackup_GLF_color;
                }
              }
            }
          }
          if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
           break;
         }
         p.y -= 2;
        }
       else
        {
        }
       for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_IDENTITY(dot(vec2(0.0, 0.0), vec2(1.0, 1.0)), dot(vec2(0.0, 0.0), vec2(1.0, 1.0)))))))
          {
           do
            {
             return;
            }
           while(_GLF_WRAPPED_LOOP(false));
          }
        }
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         for(int _injected_loop_counter = (1 | (0 & (-65068 >> 75552))); _GLF_WRAPPED_LOOP(_injected_loop_counter > (1 ^ 1)); _injected_loop_counter --)
          {
           vec4 _GLF_outVarBackup_GLF_color;
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
            return;
           for(int _injected_loop_counter = ((1 << _GLF_IDENTITY(int(4), _GLF_IDENTITY(int(4), max(int(4), int(4))))) >> _GLF_IDENTITY(int(4), _GLF_IDENTITY(int(4), max(_GLF_IDENTITY(int(4), (int(4)) * 1), int(4))))); _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
            {
             for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
              {
               _GLF_outVarBackup_GLF_color = _GLF_color;
              }
            }
           if(_GLF_DEAD(false))
            continue;
           _GLF_color = vec4(9.0, -5668.6797, 60.15, -1.8);
           if(_GLF_DEAD(false))
            {
             {
              {
               vec4 _GLF_outVarBackup_GLF_color;
               _GLF_outVarBackup_GLF_color = _GLF_color;
               _GLF_color = vec4(908.627, 6788.4446, 0.0, -8.2);
               for(int _injected_loop_counter = int(_GLF_ONE(1.0, injectionSwitch.y)); _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
                {
                 if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
                  {
                   _GLF_color = _GLF_outVarBackup_GLF_color;
                  }
                }
              }
              vec4 _GLF_outVarBackup_GLF_color;
              _GLF_outVarBackup_GLF_color = _GLF_color;
              _GLF_color = vec4(58.95, -34.78, 2.1, 6877.2718);
              if(_GLF_WRAPPED_IF_TRUE(true))
               {
                _GLF_color = _GLF_outVarBackup_GLF_color;
               }
             }
             discard;
            }
           for(int _injected_loop_counter = int(_GLF_ONE(1.0, injectionSwitch.y)); _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
            {
             if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
              {
               _GLF_color = _GLF_outVarBackup_GLF_color;
              }
             {
              vec4 _GLF_outVarBackup_GLF_color;
              _GLF_outVarBackup_GLF_color = _GLF_color;
              _GLF_color = smoothstep(vec4(-1.7, 844.501, -611.970, -22.56), vec4(-3.8, -840.457, -3.2, 319.277), vec4(-115.188, -1163.3153, -47.77, -895.140));
              if(_GLF_WRAPPED_IF_TRUE(true))
               {
                _GLF_color = _GLF_outVarBackup_GLF_color;
               }
             }
            }
          }
        }
       else
        {
        }
      }
     do
      {
       for(int _injected_loop_counter = int(_GLF_ONE(1.0, injectionSwitch.y)); _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
        {
         if(_GLF_WRAPPED_IF_FALSE(false))
          {
           if(_GLF_DEAD(false))
            {
             {
              vec4 _GLF_outVarBackup_GLF_color;
              _GLF_outVarBackup_GLF_color = _GLF_color;
              _GLF_color = vec4(-319.562, -6940.8411, -3084.7846, 496.467);
              if(_GLF_WRAPPED_IF_TRUE(true))
               {
                _GLF_color = _GLF_outVarBackup_GLF_color;
               }
             }
             break;
            }
          }
         else
          {
           if(_GLF_DEAD(false))
            break;
           if(d >= 0 && p.x < 14 && map[(p.x + 2) + (p.y) * 16] == 0)
            {
             for(int _injected_loop_counter = int(_GLF_ONE(1.0, injectionSwitch.y)); _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
              {
               vec4 _GLF_outVarBackup_GLF_color;
               _GLF_outVarBackup_GLF_color = _GLF_color;
               _GLF_color = vec4(-3858.3453, 75.91, 7550.1586, 4.9);
               if(_GLF_WRAPPED_IF_TRUE(true))
                {
                 _GLF_color = _GLF_outVarBackup_GLF_color;
                }
              }
             if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
              {
               {
                vec4 _GLF_outVarBackup_GLF_color;
                if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                 {
                 }
                else
                 {
                  if(_GLF_DEAD(false))
                   {
                    for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
                     {
                      discard;
                     }
                   }
                 }
                _GLF_outVarBackup_GLF_color = _GLF_color;
                _GLF_color = vec4(-1.7, -8624.8270, 5.6, 41.25);
                if(_GLF_WRAPPED_IF_TRUE(true))
                 {
                  {
                   vec4 _GLF_outVarBackup_GLF_color;
                   _GLF_outVarBackup_GLF_color = _GLF_color;
                   _GLF_color = vec4(2807.9586, 62.60, 528.216, -56.16);
                   if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
                    {
                     _GLF_color = _GLF_outVarBackup_GLF_color;
                    }
                  }
                  _GLF_color = _GLF_outVarBackup_GLF_color;
                 }
               }
               do
                {
                 d --;
                }
               while(_GLF_WRAPPED_LOOP(false));
              }
             else
              {
               {
                vec4 _GLF_outVarBackup_GLF_color;
                _GLF_outVarBackup_GLF_color = _GLF_color;
                for(int _injected_loop_counter = ((1 | 1) ^ 0); _GLF_WRAPPED_LOOP(_injected_loop_counter != int(_GLF_ZERO(0.0, injectionSwitch.x))); _injected_loop_counter --)
                 {
                  _GLF_color = step(0.0, vec4(-93.47, 88.49, -2.0, 7.6));
                 }
                if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
                 {
                  _GLF_color = _GLF_outVarBackup_GLF_color;
                 }
               }
               if(_GLF_DEAD(false))
                continue;
               {
                vec4 _GLF_outVarBackup_GLF_color;
                _GLF_outVarBackup_GLF_color = _GLF_color;
                if(_GLF_WRAPPED_IF_TRUE(true))
                 {
                  _GLF_color = vec4(-306.726, 9.0, -7.1, 73.54);
                 }
                else
                 {
                 }
                if(_GLF_WRAPPED_IF_TRUE(true))
                 {
                  _GLF_color = _GLF_outVarBackup_GLF_color;
                 }
               }
              }
             if(_GLF_WRAPPED_IF_TRUE(true))
              {
               vec4 _GLF_outVarBackup_GLF_color;
               _GLF_outVarBackup_GLF_color = _GLF_color;
               _GLF_color = sin(vec4(9.2, -3.0, -6.9, 1805.6249));
               if(_GLF_WRAPPED_IF_TRUE(true))
                {
                 if(_GLF_DEAD(false))
                  discard;
                 _GLF_color = _GLF_outVarBackup_GLF_color;
                }
              }
             else
              {
              }
             for(int _injected_loop_counter = (0 << _GLF_IDENTITY(int(2), _GLF_IDENTITY(int(2), (false ? _GLF_FUZZED(-33308) : int(2))))); _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
              {
               map[(p.x) + (p.y) * 16] = 1;
              }
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < sqrt(0.0)))))
              {
               {
                vec4 _GLF_outVarBackup_GLF_color;
                if(_GLF_DEAD(false))
                 continue;
                if(_GLF_WRAPPED_IF_FALSE(_GLF_IDENTITY(false, (false) || false)))
                 {
                 }
                else
                 {
                  _GLF_outVarBackup_GLF_color = _GLF_color;
                 }
                _GLF_color = vec4(-5.4, 4358.8838, -8847.8176, -8.5);
                if(_GLF_WRAPPED_IF_TRUE(true))
                 {
                  _GLF_color = _GLF_outVarBackup_GLF_color;
                 }
               }
               break;
              }
             if(_GLF_DEAD(false))
              continue;
             map[(p.x + 1) + (p.y) * 16] = 1;
             if(_GLF_DEAD(false))
              {
               if(_GLF_DEAD(false))
                continue;
               if(_GLF_WRAPPED_IF_FALSE(false))
                {
                }
               else
                {
                 if(_GLF_WRAPPED_IF_TRUE(true))
                  {
                   if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
                    {
                     return;
                     {
                      vec4 _GLF_outVarBackup_GLF_color;
                      _GLF_outVarBackup_GLF_color = _GLF_color;
                      _GLF_color = dFdy(vec4(-23.67, -1.7, -0.7, -2389.3415));
                      if(_GLF_WRAPPED_IF_TRUE(true))
                       {
                        _GLF_color = _GLF_outVarBackup_GLF_color;
                       }
                     }
                    }
                   else
                    {
                    }
                  }
                 else
                  {
                  }
                }
              }
             if(_GLF_WRAPPED_IF_TRUE(true))
              {
               map[(p.x + 2) + (p.y) * 16] = 1;
              }
             else
              {
              }
             if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
              {
              }
             else
              {
               if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                {
                 do
                  {
                   if(_GLF_DEAD(false))
                    {
                     for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < ((1 << _GLF_IDENTITY(int(3), int(3))) >> _GLF_IDENTITY(int(3), int(3)))); _injected_loop_counter ++)
                      {
                       discard;
                      }
                    }
                  }
                 while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
                 return;
                }
              }
             {
              vec4 _GLF_outVarBackup_GLF_color;
              _GLF_outVarBackup_GLF_color = _GLF_color;
              for(int _injected_loop_counter = (0 | 0); _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
               {
                _GLF_color = vec4(6.9, 8.6, -58.04, -43.13);
               }
              if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= log(1.0)))))
               {
                _GLF_color = _GLF_outVarBackup_GLF_color;
               }
             }
             p.x += 2;
             if(_GLF_DEAD(false))
              return;
             if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
              {
               do
                {
                 vec4 _GLF_outVarBackup_GLF_color;
                 _GLF_outVarBackup_GLF_color = _GLF_color;
                 _GLF_color = vec4(9437.6281, -462.318, 165.941, -52.76);
                 if(_GLF_WRAPPED_IF_TRUE(true))
                  {
                   _GLF_color = _GLF_outVarBackup_GLF_color;
                  }
                }
               while(_GLF_WRAPPED_LOOP(false));
               return;
              }
            }
          }
        }
      }
     while(_GLF_WRAPPED_LOOP(false));
     if(_GLF_DEAD(false))
      {
       if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < length(vec2(0.0, 0.0))))))
        {
        }
       else
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = vec4(-4248.6860, 6963.8872, -118.887, -241.948);
         if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
       continue;
      }
     if(d >= 0 && p.y < 14 && map[(p.x) + (p.y + 2) * 16] == 0)
      {
       d --;
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        if(_GLF_DEAD(false))
         continue;
        if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
         {
         }
        else
         {
          _GLF_color = vec4(-7.1, -8.0, 8.7, -593.006);
         }
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = vec4(-6.9, -19.09, 3484.6957, -6.9);
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           {
            vec4 _GLF_outVarBackup_GLF_color;
            for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
             {
              _GLF_outVarBackup_GLF_color = _GLF_color;
             }
            _GLF_color = vec4(330.046, 9674.2549, -2972.8795, -4295.0660);
            if(_GLF_WRAPPED_IF_FALSE(false))
             {
             }
            else
             {
              if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= tan(0.0)))))
               {
                _GLF_color = _GLF_outVarBackup_GLF_color;
               }
             }
           }
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
       }
       do
        {
         map[(p.x) + (p.y) * 16] = 1;
         {
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = vec4(-264.084, 365.449, -427.277, 8294.4485);
          if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
        }
       while(_GLF_WRAPPED_LOOP(false));
       map[(p.x) + (p.y + 1) * 16] = 1;
       map[(p.x) + (p.y + 2) * 16] = 1;
       for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
        {
         p.y += 2;
        }
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      break;
     if(_GLF_DEAD(false))
      continue;
    }
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = vec4(-9.7, 8.7, 8.3, 7.9);
     }
    else
     {
     }
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   {
    vec4 _GLF_outVarBackup_GLF_color;
    if(_GLF_DEAD(false))
     break;
    if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
     {
      if(_GLF_DEAD(false))
       break;
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
       discard;
     }
    else
     {
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        for(int _injected_loop_counter = ((1 << _GLF_IDENTITY(int(5), int(5))) >> _GLF_IDENTITY(int(5), int(5))); _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
         {
          for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
           {
            do
             {
              {
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                discard;
               vec4 _GLF_outVarBackup_GLF_color;
               _GLF_outVarBackup_GLF_color = _GLF_color;
               if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                {
                 if(_GLF_WRAPPED_IF_TRUE(true))
                  {
                   return;
                  }
                 else
                  {
                  }
                }
               for(int _injected_loop_counter = ((1 << _GLF_IDENTITY(int(4), int(4))) >> _GLF_IDENTITY(int(4), int(4))); _GLF_WRAPPED_LOOP(_injected_loop_counter != _GLF_IDENTITY(0, (0 >> _GLF_IDENTITY(int(8), int(8))) ^ (0))); _injected_loop_counter --)
                {
                 _GLF_color = vec4(617.982, 6.8, 9.0, -139.056);
                }
               if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
                {
                 _GLF_color = _GLF_outVarBackup_GLF_color;
                }
              }
              _GLF_outVarBackup_GLF_color = _GLF_color;
             }
            while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
           }
         }
       }
      else
       {
       }
      if(_GLF_DEAD(false))
       {
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
           {
            {
             vec4 _GLF_outVarBackup_GLF_color;
             if(_GLF_WRAPPED_IF_TRUE(true))
              {
               _GLF_outVarBackup_GLF_color = _GLF_color;
              }
             else
              {
              }
             _GLF_color = (-58.43 - refract(vec4(-540.266, 26.79, 7.0, 8.5), vec4(-52.60, -7225.8194, 90.95, -9.4), -0.1));
             if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
              {
               _GLF_color = _GLF_outVarBackup_GLF_color;
              }
            }
            if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
             break;
            if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
             {
              vec4 _GLF_outVarBackup_GLF_color;
              _GLF_outVarBackup_GLF_color = _GLF_color;
              _GLF_color = vec4(927.008, -246.236, -7.3, 119.136);
              if(_GLF_WRAPPED_IF_TRUE(true))
               {
                _GLF_color = _GLF_outVarBackup_GLF_color;
               }
             }
            else
             {
             }
            if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
             {
             }
            else
             {
              discard;
             }
            if(_GLF_WRAPPED_IF_TRUE(true))
             {
              vec4 _GLF_outVarBackup_GLF_color;
              if(_GLF_WRAPPED_IF_FALSE(false))
               {
               }
              else
               {
                _GLF_outVarBackup_GLF_color = _GLF_color;
               }
              _GLF_color = mix(vec4(878.021, 66.90, 3.6, -1973.6899), vec4(2.5, 7.3, 7.2, -9.7), bvec4(false, false, false, true));
              if(_GLF_WRAPPED_IF_TRUE(true))
               {
                _GLF_color = _GLF_outVarBackup_GLF_color;
               }
             }
            else
             {
             }
           }
         }
        else
         {
         }
       }
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = (mat4(-97.76, 834.434, -916.000, 8620.1122, -1.1, 8254.2540, -96.98, 2.2, 1.4, -426.722, 41.81, 4248.9568, 7533.7218, 455.843, 35.23, -3658.0636) * vec4(2994.6605, -2095.4530, 9396.2821, 8443.3973));
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        discard;
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      if(_GLF_DEAD(false))
       break;
      if(_GLF_DEAD(false))
       break;
     }
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
     continue;
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     break;
    do
     {
      do
       {
        if(_GLF_DEAD(false))
         break;
        {
         vec4 _GLF_outVarBackup_GLF_color;
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           _GLF_outVarBackup_GLF_color = _GLF_color;
          }
         else
          {
          }
         {
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = (vec4(-0.5, -3.4, 0.3, 5.9) + unpackUnorm4x8(25367u));
          if(_GLF_WRAPPED_IF_TRUE(true))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
         _GLF_color = vec4(67.10, 1.5, 3.0, -1.9);
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
          break;
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
        _GLF_color = vec4(-4683.4754, -565.898, -6.3, 13.27);
        if(_GLF_DEAD(false))
         return;
        do
         {
          if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < _GLF_IDENTITY(dot(vec4(1.0, 0.0, 0.0, 1.0), vec4(0.0, 1.0, _GLF_ONE(1.0, injectionSwitch.y), 0.0)), dot(vec4(1.0, 0.0, 0.0, 1.0), vec4(0.0, 1.0, _GLF_ONE(1.0, injectionSwitch.y), 0.0)))))))
           discard;
         }
        while(_GLF_WRAPPED_LOOP(false));
       }
      while(_GLF_WRAPPED_LOOP(false));
     }
    while(_GLF_WRAPPED_LOOP(false));
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     do
      {
       _GLF_color = vec4(-9428.0963, -4.9, 73.69, -3669.3421);
      }
     while(_GLF_WRAPPED_LOOP(false));
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    if(_GLF_DEAD(false))
     break;
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
       {
       }
      else
       {
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < tan(0.0)))))
         discard;
       }
      if(_GLF_DEAD(false))
       {
        if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
         break;
        break;
       }
      if(_GLF_WRAPPED_IF_FALSE(false))
       {
       }
      else
       {
        vec4 _GLF_outVarBackup_GLF_color;
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         {
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = vec4(-3.8, -3467.0654, -9.0, -5329.0910);
          if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, (true) && true)))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
         if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          {
          }
         else
          {
           _GLF_color = vec4(3.4, -8.1, -44.84, -0.2);
          }
         if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, (true) && true)))
          {
           do
            {
             if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
              discard;
            }
           while(_GLF_WRAPPED_LOOP(false));
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
        {
         vec4 _GLF_outVarBackup_GLF_color;
         if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          {
          }
         else
          {
           _GLF_outVarBackup_GLF_color = _GLF_color;
          }
         {
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = (normalize(vec2(-550.134, -0.8)) * mat4x2(-901.239, 8357.6658, -2.6, -210.495, -450.634, 9.3, -292.384, -3707.7659));
          if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
           {
            for(int _injected_loop_counter = _GLF_IDENTITY((1 ^ 1), min((1 ^ 1), (1 ^ 1))); _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
             {
              _GLF_color = _GLF_outVarBackup_GLF_color;
             }
           }
         }
         {
          vec4 _GLF_outVarBackup_GLF_color;
          for(int _injected_loop_counter = (0 >> _GLF_IDENTITY(int(3), int(3))); _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
           {
            _GLF_outVarBackup_GLF_color = _GLF_color;
           }
          _GLF_color = intBitsToFloat(ivec4(9709, -43100, -228, 19502));
          if(_GLF_WRAPPED_IF_TRUE(true))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
         for(int _injected_loop_counter = (0 ^ 0); _GLF_WRAPPED_LOOP(_injected_loop_counter < ((1 << _GLF_IDENTITY(int(4), int(4))) >> _GLF_IDENTITY(int(4), int(4)))); _injected_loop_counter ++)
          {
           if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < tan(0.0)))))
            {
            }
           else
            {
             _GLF_color = acosh(vec4(48.48, 3498.6762, -6576.3032, -6739.5887));
            }
          }
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           if(_GLF_WRAPPED_IF_FALSE(false))
            {
            }
           else
            {
             _GLF_color = _GLF_outVarBackup_GLF_color;
             {
              vec4 _GLF_outVarBackup_GLF_color;
              _GLF_outVarBackup_GLF_color = _GLF_color;
              _GLF_color = vec4(-7.1, -0.4, -8044.4170, -336.703);
              if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
               {
                _GLF_color = _GLF_outVarBackup_GLF_color;
               }
             }
            }
           if(_GLF_DEAD(false))
            {
             for(int _injected_loop_counter = (0 >> _GLF_IDENTITY(int(1), int(1))); _GLF_WRAPPED_LOOP(_injected_loop_counter != (1 ^ 0)); _injected_loop_counter ++)
              {
               {
                vec4 _GLF_outVarBackup_GLF_color;
                _GLF_outVarBackup_GLF_color = _GLF_color;
                _GLF_color = vec4(78.00, -4.5, 1025.4388, 3.1);
                if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
                 {
                  do
                   {
                    _GLF_color = _GLF_outVarBackup_GLF_color;
                   }
                  while(_GLF_WRAPPED_LOOP(false));
                 }
               }
               return;
              }
            }
          }
         if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          {
          }
         else
          {
           if(_GLF_DEAD(false))
            discard;
          }
        }
        _GLF_outVarBackup_GLF_color = _GLF_color;
        do
         {
          do
           {
            _GLF_color = asinh(vec4(515.743, -7.9, -4.3, -4.9));
           }
          while(_GLF_WRAPPED_LOOP(_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.y < sqrt(0.0))), (_GLF_FALSE(false, (gl_FragCoord.y < sqrt(0.0)))) && true)));
         }
        while(_GLF_WRAPPED_LOOP(false));
        if(_GLF_DEAD(false))
         break;
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
         {
          if(_GLF_WRAPPED_IF_FALSE(_GLF_IDENTITY(false, false || (false))))
           {
           }
          else
           {
            if(_GLF_DEAD(false))
             {
              do
               {
                return;
               }
              while(_GLF_WRAPPED_LOOP(false));
             }
           }
          if(_GLF_DEAD(false))
           {
            {
             vec4 _GLF_outVarBackup_GLF_color;
             for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != int(_GLF_ONE(1.0, injectionSwitch.y))); _injected_loop_counter ++)
              {
               _GLF_outVarBackup_GLF_color = _GLF_color;
              }
             _GLF_color = vec4(31.42, 2324.1882, -8812.5940, -25.18);
             if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
              {
               do
                {
                 _GLF_color = _GLF_outVarBackup_GLF_color;
                }
               while(_GLF_WRAPPED_LOOP(false));
               if(_GLF_DEAD(false))
                break;
              }
            }
            for(int _injected_loop_counter = (int(_GLF_ZERO(0.0, injectionSwitch.x)) << _GLF_IDENTITY(int(7), int(7))); _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
             {
              discard;
             }
            if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
             break;
           }
          if(_GLF_WRAPPED_IF_TRUE(true))
           {
            do
             {
              _GLF_color = _GLF_outVarBackup_GLF_color;
             }
            while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
           }
          else
           {
           }
         }
       }
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
    if(_GLF_DEAD(false))
     return;
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        discard;
      }
     else
      {
      }
     _GLF_color = log(vec4(27.22, -7011.2003, -544.535, 2408.9037));
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
   }
   if(_GLF_WRAPPED_IF_FALSE(false))
    {
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < tan(0.0)))))
       continue;
      _GLF_color = (mod(1101.4047, -799.011) + vec4(418.433, 622.448, 1.0, 7.9));
      for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > int(_GLF_ZERO(0.0, injectionSwitch.x))); _injected_loop_counter --)
       {
        if(_GLF_DEAD(false))
         discard;
       }
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
    }
   else
    {
     if(_GLF_DEAD(false))
      continue;
     if(map[ipos.y * 16 + ipos.x] == 1)
      {
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(-9646.4925, -6.2, 5274.3037, -60.50);
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= _GLF_ZERO(0.0, injectionSwitch.x)))))
         {
          if(_GLF_WRAPPED_IF_TRUE(true))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
        else
         {
         }
       }
       _GLF_color = vec4(1.0, 1.0, 1.0, 1.0);
       return;
      }
    }
   if(_GLF_DEAD(false))
    break;
  }
 while(canwalk);
 _GLF_color = vec4(0.0, 0.0, 0.0, 1.0);
 {
  vec4 _GLF_outVarBackup_GLF_color;
  if(_GLF_WRAPPED_IF_FALSE(false))
   {
   }
  else
   {
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     {
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(5227.8172, -2395.8809, 1.8, 7.3);
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
       {
        return;
       }
     }
   }
  if(_GLF_WRAPPED_IF_FALSE(false))
   {
   }
  else
   {
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
       {
        _GLF_color = smoothstep(vec4(-4590.7679, -5.2, -6.5, -439.821), vec4(3.3, 9718.7959, -15.14, 5740.2238), vec4(83.92, -0.3, 65.05, -22.89));
       }
      else
       {
       }
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
    else
     {
     }
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_outVarBackup_GLF_color = _GLF_color;
     }
    else
     {
     }
   }
  if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
   return;
  _GLF_color = uintBitsToFloat(uvec4(uvec2(110558u, 172637u), uvec2(39163u, 185003u)));
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     return;
   }
  for(int _injected_loop_counter = (1 | (0 | 0)); _GLF_WRAPPED_LOOP(_injected_loop_counter != ((0 << _GLF_IDENTITY(int(8), int(8))) << _GLF_IDENTITY(int(2), int(2)))); _injected_loop_counter --)
   {
    if(_GLF_DEAD(false))
     return;
   }
 }
}
