; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 71
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %9 %17
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "_GLF_color"
               OpName %13 "tex"
               OpName %17 "gl_FragCoord"
               OpName %52 "buf_push"
               OpMemberName %52 0 "injectionSwitch"
               OpName %54 ""
               OpDecorate %9 Location 0
               OpDecorate %13 RelaxedPrecision
               OpDecorate %13 DescriptorSet 0
               OpDecorate %13 Binding 0
               OpDecorate %14 RelaxedPrecision
               OpDecorate %17 BuiltIn FragCoord
               OpDecorate %29 RelaxedPrecision
               OpDecorate %36 RelaxedPrecision
               OpDecorate %43 RelaxedPrecision
               OpDecorate %44 RelaxedPrecision
               OpDecorate %48 RelaxedPrecision
               OpMemberDecorate %52 0 Offset 0
               OpDecorate %52 Block
               OpDecorate %66 RelaxedPrecision
               OpDecorate %67 RelaxedPrecision
               OpDecorate %69 RelaxedPrecision
               OpDecorate %70 RelaxedPrecision
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Output %7
          %9 = OpVariable %8 Output
         %10 = OpTypeImage %6 2D 0 0 0 1 Unknown
         %11 = OpTypeSampledImage %10
         %12 = OpTypePointer UniformConstant %11
         %13 = OpVariable %12 UniformConstant
         %15 = OpConstant %6 1
         %16 = OpTypePointer Input %7
         %17 = OpVariable %16 Input
         %18 = OpTypeInt 32 0
         %19 = OpConstant %18 1
         %20 = OpTypePointer Input %6
         %23 = OpConstant %18 2
         %26 = OpConstant %18 3
         %45 = OpConstant %18 0
         %49 = OpTypeBool
         %50 = OpConstantTrue %49
         %51 = OpTypeVector %6 2
         %52 = OpTypeStruct %51
         %53 = OpTypePointer PushConstant %52
         %54 = OpVariable %53 PushConstant
         %55 = OpTypeInt 32 1
         %56 = OpConstant %55 0
         %57 = OpTypePointer PushConstant %6
         %63 = OpConstantFalse %49
         %64 = OpTypeVector %49 4
         %68 = OpConstant %6 0.00390625
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %14 = OpLoad %11 %13
         %21 = OpAccessChain %20 %17 %19
         %22 = OpLoad %6 %21
         %24 = OpAccessChain %20 %17 %23
         %25 = OpLoad %6 %24
         %27 = OpAccessChain %20 %17 %26
         %28 = OpLoad %6 %27
         %29 = OpCompositeConstruct %7 %15 %22 %25 %28
         %30 = OpAccessChain %20 %17 %19
         %31 = OpLoad %6 %30
         %32 = OpAccessChain %20 %17 %23
         %33 = OpLoad %6 %32
         %34 = OpAccessChain %20 %17 %26
         %35 = OpLoad %6 %34
         %36 = OpCompositeConstruct %7 %15 %31 %33 %35
         %37 = OpAccessChain %20 %17 %19
         %38 = OpLoad %6 %37
         %39 = OpAccessChain %20 %17 %23
         %40 = OpLoad %6 %39
         %41 = OpAccessChain %20 %17 %26
         %42 = OpLoad %6 %41
         %43 = OpCompositeConstruct %7 %15 %38 %40 %42
         %44 = OpExtInst %7 %1 FClamp %29 %36 %43
         %46 = OpAccessChain %20 %17 %45
         %47 = OpLoad %6 %46
         %48 = OpCompositeConstruct %7 %47 %15 %15 %15
         %58 = OpAccessChain %57 %54 %56 %45
         %59 = OpLoad %6 %58
         %60 = OpAccessChain %57 %54 %56 %19
         %61 = OpLoad %6 %60
         %62 = OpFOrdGreaterThan %49 %59 %61
         %65 = OpCompositeConstruct %64 %50 %62 %63 %63
         %66 = OpSelect %7 %65 %48 %44
         %67 = OpVectorShuffle %51 %66 %66 0 1
         %69 = OpVectorTimesScalar %51 %67 %68
         %70 = OpImageSampleImplicitLod %7 %14 %69
               OpStore %9 %70
               OpReturn
               OpFunctionEnd
