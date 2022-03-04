; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 81
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %75
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %11 "a"
               OpName %13 "b"
               OpName %17 "v"
               OpName %20 "S"
               OpMemberName %20 0 "data"
               OpName %22 "s"
               OpName %60 "tex"
               OpName %75 "_GLF_color"
               OpDecorate %60 RelaxedPrecision
               OpDecorate %60 DescriptorSet 0
               OpDecorate %60 Binding 0
               OpDecorate %61 RelaxedPrecision
               OpDecorate %64 RelaxedPrecision
               OpDecorate %75 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %8 = OpVariable %7 Private
          %9 = OpConstant %6 0
         %10 = OpTypePointer Function %6
         %12 = OpConstant %6 1
         %14 = OpTypeFloat 32
         %15 = OpTypeVector %14 4
         %16 = OpTypePointer Function %15
         %18 = OpConstant %14 1
         %19 = OpConstantComposite %15 %18 %18 %18 %18
         %20 = OpTypeStruct %6
         %21 = OpTypePointer Function %20
         %23 = OpConstantComposite %20 %12
         %29 = OpTypeBool
         %30 = OpTypeInt 32 0
         %31 = OpConstant %30 0
         %32 = OpTypePointer Function %14
         %36 = OpConstant %14 0
         %45 = OpConstant %6 10
         %52 = OpConstant %6 3
         %57 = OpTypeImage %14 2D 0 0 0 1 Unknown
         %58 = OpTypeSampledImage %57
         %59 = OpTypePointer UniformConstant %58
         %60 = OpVariable %59 UniformConstant
         %62 = OpTypeVector %14 2
         %63 = OpConstantComposite %62 %18 %18
         %70 = OpConstant %6 2
         %74 = OpTypePointer Output %15
         %75 = OpVariable %74 Output
         %80 = OpConstantComposite %15 %36 %36 %36 %36
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %13 = OpVariable %10 Function
         %17 = OpVariable %16 Function
         %22 = OpVariable %21 Function
               OpStore %8 %9
               OpStore %11 %12
               OpStore %13 %12
               OpStore %17 %19
               OpStore %22 %23
               OpBranch %24
         %24 = OpLabel
               OpLoopMerge %26 %27 None
               OpBranch %28
         %28 = OpLabel
         %33 = OpAccessChain %32 %17 %31
         %34 = OpLoad %14 %33
         %35 = OpFAdd %14 %34 %18
         %37 = OpFOrdGreaterThan %29 %35 %36
               OpSelectionMerge %39 None
               OpBranchConditional %37 %38 %39
         %38 = OpLabel
         %40 = OpAccessChain %10 %22 %9
         %41 = OpLoad %6 %40
         %42 = OpSLessThanEqual %29 %41 %12
               OpBranch %39
         %39 = OpLabel
         %43 = OpPhi %29 %37 %28 %42 %38
         %44 = OpLoad %6 %8
         %46 = OpSLessThan %29 %44 %45
         %47 = OpLogicalAnd %29 %43 %46
               OpBranchConditional %47 %25 %26
         %25 = OpLabel
         %48 = OpLoad %6 %8
         %49 = OpIAdd %6 %48 %12
               OpStore %8 %49
         %50 = OpLoad %6 %13
         %51 = OpIAdd %6 %50 %12
               OpStore %13 %51
         %53 = OpSGreaterThan %29 %50 %52
               OpSelectionMerge %55 None
               OpBranchConditional %53 %54 %55
         %54 = OpLabel
               OpBranch %26
         %55 = OpLabel
         %61 = OpLoad %58 %60
         %64 = OpImageSampleImplicitLod %15 %61 %63
               OpStore %17 %64
         %65 = OpAccessChain %10 %22 %9
         %66 = OpLoad %6 %65
         %67 = OpIAdd %6 %66 %12
               OpStore %65 %67
               OpBranch %27
         %27 = OpLabel
               OpBranch %24
         %26 = OpLabel
         %68 = OpAccessChain %10 %22 %9
         %69 = OpLoad %6 %68
         %71 = OpIEqual %29 %69 %70
               OpSelectionMerge %73 None
               OpBranchConditional %71 %72 %79
         %72 = OpLabel
         %76 = OpLoad %6 %11
         %77 = OpConvertSToF %14 %76
         %78 = OpCompositeConstruct %15 %77 %36 %36 %18
               OpStore %75 %78
               OpBranch %73
         %79 = OpLabel
               OpStore %75 %80
               OpBranch %73
         %73 = OpLabel
               OpReturn
               OpFunctionEnd
