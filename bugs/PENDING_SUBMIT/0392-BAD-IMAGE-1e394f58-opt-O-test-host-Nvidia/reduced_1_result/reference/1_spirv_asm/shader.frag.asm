; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 87
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %22 %75
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "i"
               OpName %13 "uvstep"
               OpName %17 "slope"
               OpName %19 "coord"
               OpName %22 "gl_FragCoord"
               OpName %26 "refh"
               OpName %30 "tex"
               OpName %43 "h"
               OpName %75 "_GLF_color"
               OpDecorate %8 RelaxedPrecision
               OpDecorate %22 BuiltIn FragCoord
               OpDecorate %30 RelaxedPrecision
               OpDecorate %30 DescriptorSet 0
               OpDecorate %30 Binding 0
               OpDecorate %31 RelaxedPrecision
               OpDecorate %33 RelaxedPrecision
               OpDecorate %36 RelaxedPrecision
               OpDecorate %44 RelaxedPrecision
               OpDecorate %46 RelaxedPrecision
               OpDecorate %47 RelaxedPrecision
               OpDecorate %57 RelaxedPrecision
               OpDecorate %67 RelaxedPrecision
               OpDecorate %69 RelaxedPrecision
               OpDecorate %70 RelaxedPrecision
               OpDecorate %71 RelaxedPrecision
               OpDecorate %73 RelaxedPrecision
               OpDecorate %75 Location 0
               OpDecorate %76 RelaxedPrecision
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 0
         %10 = OpTypeFloat 32
         %11 = OpTypeVector %10 2
         %12 = OpTypePointer Function %11
         %14 = OpConstant %10 0.00390625
         %15 = OpConstantComposite %11 %14 %14
         %16 = OpTypePointer Function %10
         %18 = OpConstant %10 0.0078125
         %20 = OpTypeVector %10 4
         %21 = OpTypePointer Input %20
         %22 = OpVariable %21 Input
         %27 = OpTypeImage %10 2D 0 0 0 1 Unknown
         %28 = OpTypeSampledImage %27
         %29 = OpTypePointer UniformConstant %28
         %30 = OpVariable %29 UniformConstant
         %34 = OpTypeInt 32 0
         %35 = OpConstant %34 1
         %55 = OpTypeBool
         %58 = OpConstant %6 32
         %72 = OpConstant %6 1
         %74 = OpTypePointer Output %20
         %75 = OpVariable %74 Output
         %78 = OpConstant %10 0.03125
         %80 = OpTypeVector %10 3
         %82 = OpConstant %10 1
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %13 = OpVariable %12 Function
         %17 = OpVariable %16 Function
         %19 = OpVariable %12 Function
         %26 = OpVariable %16 Function
         %43 = OpVariable %16 Function
               OpStore %8 %9
               OpStore %13 %15
               OpStore %17 %18
         %23 = OpLoad %20 %22
         %24 = OpVectorShuffle %11 %23 %23 0 1
         %25 = OpVectorTimesScalar %11 %24 %14
               OpStore %19 %25
         %31 = OpLoad %28 %30
         %32 = OpLoad %11 %19
         %33 = OpImageSampleImplicitLod %20 %31 %32
         %36 = OpCompositeExtract %10 %33 1
               OpStore %26 %36
         %37 = OpLoad %11 %13
         %38 = OpLoad %11 %19
         %39 = OpFSub %11 %38 %37
               OpStore %19 %39
         %40 = OpLoad %10 %17
         %41 = OpLoad %10 %26
         %42 = OpFAdd %10 %41 %40
               OpStore %26 %42
         %44 = OpLoad %28 %30
         %45 = OpLoad %11 %19
         %46 = OpImageSampleImplicitLod %20 %44 %45
         %47 = OpCompositeExtract %10 %46 1
               OpStore %43 %47
               OpBranch %48
         %48 = OpLabel
               OpLoopMerge %50 %51 None
               OpBranch %52
         %52 = OpLabel
         %53 = OpLoad %10 %43
         %54 = OpLoad %10 %26
         %56 = OpFOrdLessThan %55 %53 %54
         %57 = OpLoad %6 %8
         %59 = OpSLessThan %55 %57 %58
         %60 = OpLogicalAnd %55 %56 %59
               OpBranchConditional %60 %49 %50
         %49 = OpLabel
         %61 = OpLoad %11 %13
         %62 = OpLoad %11 %19
         %63 = OpFSub %11 %62 %61
               OpStore %19 %63
         %64 = OpLoad %10 %17
         %65 = OpLoad %10 %26
         %66 = OpFAdd %10 %65 %64
               OpStore %26 %66
         %67 = OpLoad %28 %30
         %68 = OpLoad %11 %19
         %69 = OpImageSampleImplicitLod %20 %67 %68
         %70 = OpCompositeExtract %10 %69 1
               OpStore %43 %70
         %71 = OpLoad %6 %8
         %73 = OpIAdd %6 %71 %72
               OpStore %8 %73
               OpBranch %51
         %51 = OpLabel
               OpBranch %48
         %50 = OpLabel
         %76 = OpLoad %6 %8
         %77 = OpConvertSToF %10 %76
         %79 = OpFMul %10 %77 %78
         %81 = OpCompositeConstruct %80 %79 %79 %79
         %83 = OpCompositeExtract %10 %81 0
         %84 = OpCompositeExtract %10 %81 1
         %85 = OpCompositeExtract %10 %81 2
         %86 = OpCompositeConstruct %20 %83 %84 %85 %82
               OpStore %75 %86
               OpReturn
               OpFunctionEnd
