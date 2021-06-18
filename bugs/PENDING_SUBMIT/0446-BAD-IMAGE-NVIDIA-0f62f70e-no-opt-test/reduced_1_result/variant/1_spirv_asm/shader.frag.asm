; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 87
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %16 %85
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "i"
               OpName %13 "coord"
               OpName %16 "gl_FragCoord"
               OpName %22 "texel"
               OpName %26 "tex"
               OpName %85 "_GLF_color"
               OpDecorate %16 BuiltIn FragCoord
               OpDecorate %26 RelaxedPrecision
               OpDecorate %26 DescriptorSet 0
               OpDecorate %26 Binding 0
               OpDecorate %27 RelaxedPrecision
               OpDecorate %29 RelaxedPrecision
               OpDecorate %66 RelaxedPrecision
               OpDecorate %68 RelaxedPrecision
               OpDecorate %76 RelaxedPrecision
               OpDecorate %77 RelaxedPrecision
               OpDecorate %79 RelaxedPrecision
               OpDecorate %80 RelaxedPrecision
               OpDecorate %85 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 0
         %10 = OpTypeFloat 32
         %11 = OpTypeVector %10 2
         %12 = OpTypePointer Function %11
         %14 = OpTypeVector %10 4
         %15 = OpTypePointer Input %14
         %16 = OpVariable %15 Input
         %19 = OpConstant %10 0.00390625
         %21 = OpTypePointer Function %14
         %23 = OpTypeImage %10 2D 0 0 0 1 Unknown
         %24 = OpTypeSampledImage %23
         %25 = OpTypePointer UniformConstant %24
         %26 = OpVariable %25 UniformConstant
         %35 = OpTypeInt 32 0
         %36 = OpConstant %35 0
         %37 = OpTypePointer Function %10
         %40 = OpConstant %35 1
         %44 = OpConstant %35 2
         %48 = OpConstant %10 1
         %49 = OpTypeBool
         %52 = OpConstant %6 16
         %61 = OpConstant %10 256
         %69 = OpTypeMatrix %14 4
         %70 = OpConstant %10 0
         %71 = OpConstantComposite %14 %48 %70 %70 %70
         %72 = OpConstantComposite %14 %70 %48 %70 %70
         %73 = OpConstantComposite %14 %70 %70 %48 %70
         %74 = OpConstantComposite %14 %70 %70 %70 %48
         %75 = OpConstantComposite %69 %71 %72 %73 %74
         %82 = OpConstant %6 1
         %84 = OpTypePointer Output %14
         %85 = OpVariable %84 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %13 = OpVariable %12 Function
         %22 = OpVariable %21 Function
               OpStore %8 %9
         %17 = OpLoad %14 %16
         %18 = OpVectorShuffle %11 %17 %17 0 1
         %20 = OpVectorTimesScalar %11 %18 %19
               OpStore %13 %20
         %27 = OpLoad %24 %26
         %28 = OpLoad %11 %13
         %29 = OpImageSampleImplicitLod %14 %27 %28
               OpStore %22 %29
               OpBranch %30
         %30 = OpLabel
               OpLoopMerge %32 %33 None
               OpBranch %34
         %34 = OpLabel
         %38 = OpAccessChain %37 %22 %36
         %39 = OpLoad %10 %38
         %41 = OpAccessChain %37 %22 %40
         %42 = OpLoad %10 %41
         %43 = OpFAdd %10 %39 %42
         %45 = OpAccessChain %37 %22 %44
         %46 = OpLoad %10 %45
         %47 = OpFAdd %10 %43 %46
         %50 = OpFOrdGreaterThan %49 %47 %48
         %51 = OpLoad %6 %8
         %53 = OpSLessThan %49 %51 %52
         %54 = OpLogicalAnd %49 %50 %53
               OpBranchConditional %54 %31 %32
         %31 = OpLabel
         %55 = OpLoad %14 %22
         %56 = OpVectorShuffle %11 %55 %55 0 2
         %57 = OpLoad %14 %22
         %58 = OpVectorShuffle %11 %57 %57 1 1
         %59 = OpFAdd %11 %56 %58
               OpStore %13 %59
         %60 = OpLoad %11 %13
         %62 = OpVectorTimesScalar %11 %60 %61
         %63 = OpExtInst %11 %1 Floor %62
         %64 = OpCompositeConstruct %11 %61 %61
         %65 = OpFDiv %11 %63 %64
               OpStore %13 %65
         %66 = OpLoad %24 %26
         %67 = OpLoad %11 %13
         %68 = OpImageSampleImplicitLod %14 %66 %67
         %76 = OpVectorTimesMatrix %14 %68 %75
         %77 = OpLoad %24 %26
         %78 = OpLoad %11 %13
         %79 = OpImageSampleImplicitLod %14 %77 %78
         %80 = OpExtInst %14 %1 FMin %76 %79
               OpStore %22 %80
         %81 = OpLoad %6 %8
         %83 = OpIAdd %6 %81 %82
               OpStore %8 %83
               OpBranch %33
         %33 = OpLabel
               OpBranch %30
         %32 = OpLabel
         %86 = OpLoad %14 %22
               OpStore %85 %86
               OpReturn
               OpFunctionEnd
