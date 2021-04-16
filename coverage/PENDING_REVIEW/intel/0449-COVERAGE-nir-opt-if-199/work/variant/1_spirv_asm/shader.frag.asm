; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 74
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %29
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %13 "buf0"
               OpMemberName %13 0 "_GLF_uniform_int_values"
               OpName %15 ""
               OpName %29 "_GLF_color"
               OpDecorate %12 ArrayStride 16
               OpMemberDecorate %13 0 Offset 0
               OpDecorate %13 Block
               OpDecorate %15 DescriptorSet 0
               OpDecorate %15 Binding 0
               OpDecorate %29 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %8 = OpVariable %7 Private
          %9 = OpConstant %6 0
         %10 = OpTypeInt 32 0
         %11 = OpConstant %10 2
         %12 = OpTypeArray %6 %11
         %13 = OpTypeStruct %12
         %14 = OpTypePointer Uniform %13
         %15 = OpVariable %14 Uniform
         %16 = OpTypePointer Uniform %6
         %22 = OpTypeBool
         %23 = OpConstantTrue %22
         %26 = OpTypeFloat 32
         %27 = OpTypeVector %26 4
         %28 = OpTypePointer Output %27
         %29 = OpVariable %28 Output
         %30 = OpConstant %6 1
         %51 = OpConstantFalse %22
         %71 = OpConstant %6 100
          %4 = OpFunction %2 None %3
          %5 = OpLabel
               OpStore %8 %9
         %17 = OpAccessChain %16 %15 %9 %9
         %18 = OpLoad %6 %17
               OpSelectionMerge %21 None
               OpSwitch %18 %21 0 %19 1 %20
         %19 = OpLabel
               OpSelectionMerge %25 None
               OpBranchConditional %23 %24 %25
         %24 = OpLabel
         %31 = OpAccessChain %16 %15 %9 %30
         %32 = OpLoad %6 %31
         %33 = OpConvertSToF %26 %32
         %34 = OpCompositeConstruct %27 %33 %33 %33 %33
               OpStore %29 %34
               OpReturn
         %25 = OpLabel
               OpBranch %20
         %20 = OpLabel
               OpSelectionMerge %37 None
               OpBranchConditional %23 %36 %37
         %36 = OpLabel
         %38 = OpAccessChain %16 %15 %9 %9
         %39 = OpLoad %6 %38
         %40 = OpConvertSToF %26 %39
         %41 = OpAccessChain %16 %15 %9 %30
         %42 = OpLoad %6 %41
         %43 = OpConvertSToF %26 %42
         %44 = OpAccessChain %16 %15 %9 %30
         %45 = OpLoad %6 %44
         %46 = OpConvertSToF %26 %45
         %47 = OpAccessChain %16 %15 %9 %9
         %48 = OpLoad %6 %47
         %49 = OpConvertSToF %26 %48
         %50 = OpCompositeConstruct %27 %40 %43 %46 %49
               OpStore %29 %50
               OpSelectionMerge %53 None
               OpBranchConditional %51 %52 %53
         %52 = OpLabel
         %54 = OpAccessChain %16 %15 %9 %9
         %55 = OpLoad %6 %54
         %56 = OpConvertSToF %26 %55
         %57 = OpCompositeConstruct %27 %56 %56 %56 %56
               OpStore %29 %57
               OpBranch %58
         %58 = OpLabel
               OpLoopMerge %60 %61 None
               OpBranch %59
         %59 = OpLabel
         %62 = OpLoad %6 %8
         %63 = OpIAdd %6 %62 %30
               OpStore %8 %63
               OpSelectionMerge %65 None
               OpBranchConditional %51 %64 %65
         %64 = OpLabel
               OpReturn
         %65 = OpLabel
               OpSelectionMerge %68 None
               OpBranchConditional %23 %67 %68
         %67 = OpLabel
               OpReturn
         %68 = OpLabel
               OpBranch %61
         %61 = OpLabel
         %70 = OpLoad %6 %8
         %72 = OpSLessThan %22 %70 %71
               OpBranchConditional %72 %58 %60
         %60 = OpLabel
               OpBranch %53
         %53 = OpLabel
               OpBranch %37
         %37 = OpLabel
               OpBranch %21
         %21 = OpLabel
               OpReturn
               OpFunctionEnd
