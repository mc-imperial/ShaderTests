; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 76
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %57
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_int_values"
               OpName %14 ""
               OpName %20 "i"
               OpName %57 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpDecorate %57 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 4
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpConstant %6 0
         %16 = OpConstant %6 1
         %17 = OpTypePointer Uniform %6
         %21 = OpConstant %6 2
         %36 = OpTypeBool
         %48 = OpConstant %6 3
         %54 = OpTypeFloat 32
         %55 = OpTypeVector %54 4
         %56 = OpTypePointer Output %55
         %57 = OpVariable %56 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %20 = OpVariable %7 Function
         %18 = OpAccessChain %17 %14 %15 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
         %22 = OpAccessChain %17 %14 %15 %21
         %23 = OpLoad %6 %22
         %24 = OpSNegate %6 %23
               OpStore %20 %24
               OpBranch %25
         %25 = OpLabel
               OpLoopMerge %27 %28 None
               OpBranch %29
         %29 = OpLabel
         %30 = OpLoad %6 %20
         %31 = OpAccessChain %17 %14 %15 %15
         %32 = OpLoad %6 %31
         %33 = OpAccessChain %17 %14 %15 %15
         %34 = OpLoad %6 %33
         %35 = OpShiftRightArithmetic %6 %32 %34
         %37 = OpSLessThan %36 %30 %35
               OpBranchConditional %37 %26 %27
         %26 = OpLabel
         %38 = OpLoad %6 %8
         %39 = OpSGreaterThanEqual %36 %38 %21
               OpSelectionMerge %41 None
               OpBranchConditional %39 %40 %41
         %40 = OpLabel
               OpBranch %27
         %41 = OpLabel
         %43 = OpLoad %6 %8
         %44 = OpIAdd %6 %43 %16
               OpStore %8 %44
               OpBranch %28
         %28 = OpLabel
         %45 = OpLoad %6 %20
         %46 = OpIAdd %6 %45 %16
               OpStore %20 %46
               OpBranch %25
         %27 = OpLabel
         %47 = OpLoad %6 %8
         %49 = OpAccessChain %17 %14 %15 %48
         %50 = OpLoad %6 %49
         %51 = OpIEqual %36 %47 %50
               OpSelectionMerge %53 None
               OpBranchConditional %51 %52 %71
         %52 = OpLabel
         %58 = OpAccessChain %17 %14 %15 %15
         %59 = OpLoad %6 %58
         %60 = OpConvertSToF %54 %59
         %61 = OpAccessChain %17 %14 %15 %16
         %62 = OpLoad %6 %61
         %63 = OpConvertSToF %54 %62
         %64 = OpAccessChain %17 %14 %15 %16
         %65 = OpLoad %6 %64
         %66 = OpConvertSToF %54 %65
         %67 = OpAccessChain %17 %14 %15 %15
         %68 = OpLoad %6 %67
         %69 = OpConvertSToF %54 %68
         %70 = OpCompositeConstruct %55 %60 %63 %66 %69
               OpStore %57 %70
               OpBranch %53
         %71 = OpLabel
         %72 = OpAccessChain %17 %14 %15 %16
         %73 = OpLoad %6 %72
         %74 = OpConvertSToF %54 %73
         %75 = OpCompositeConstruct %55 %74 %74 %74 %74
               OpStore %57 %75
               OpBranch %53
         %53 = OpLabel
               OpReturn
               OpFunctionEnd
