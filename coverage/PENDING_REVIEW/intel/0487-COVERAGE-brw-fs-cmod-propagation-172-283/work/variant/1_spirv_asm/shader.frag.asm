; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 71
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %52
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_int_values"
               OpName %14 ""
               OpName %20 "i"
               OpName %52 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpDecorate %52 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 3
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpConstant %6 0
         %16 = OpConstant %6 1
         %17 = OpTypePointer Uniform %6
         %29 = OpConstant %6 2
         %32 = OpTypeBool
         %49 = OpTypeFloat 32
         %50 = OpTypeVector %49 4
         %51 = OpTypePointer Output %50
         %52 = OpVariable %51 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %20 = OpVariable %7 Function
         %18 = OpAccessChain %17 %14 %15 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
         %21 = OpAccessChain %17 %14 %15 %16
         %22 = OpLoad %6 %21
               OpStore %20 %22
               OpBranch %23
         %23 = OpLabel
               OpLoopMerge %25 %26 None
               OpBranch %27
         %27 = OpLabel
         %28 = OpLoad %6 %20
         %30 = OpAccessChain %17 %14 %15 %29
         %31 = OpLoad %6 %30
         %33 = OpSLessThan %32 %28 %31
               OpBranchConditional %33 %24 %25
         %24 = OpLabel
         %34 = OpLoad %6 %20
         %35 = OpNot %6 %34
         %36 = OpINotEqual %32 %35 %15
               OpSelectionMerge %38 None
               OpBranchConditional %36 %37 %38
         %37 = OpLabel
         %39 = OpLoad %6 %8
         %40 = OpIAdd %6 %39 %16
               OpStore %8 %40
               OpBranch %38
         %38 = OpLabel
               OpBranch %26
         %26 = OpLabel
         %41 = OpLoad %6 %20
         %42 = OpIAdd %6 %41 %16
               OpStore %20 %42
               OpBranch %23
         %25 = OpLabel
         %43 = OpLoad %6 %8
         %44 = OpAccessChain %17 %14 %15 %29
         %45 = OpLoad %6 %44
         %46 = OpIEqual %32 %43 %45
               OpSelectionMerge %48 None
               OpBranchConditional %46 %47 %66
         %47 = OpLabel
         %53 = OpAccessChain %17 %14 %15 %15
         %54 = OpLoad %6 %53
         %55 = OpConvertSToF %49 %54
         %56 = OpAccessChain %17 %14 %15 %16
         %57 = OpLoad %6 %56
         %58 = OpConvertSToF %49 %57
         %59 = OpAccessChain %17 %14 %15 %16
         %60 = OpLoad %6 %59
         %61 = OpConvertSToF %49 %60
         %62 = OpAccessChain %17 %14 %15 %15
         %63 = OpLoad %6 %62
         %64 = OpConvertSToF %49 %63
         %65 = OpCompositeConstruct %50 %55 %58 %61 %64
               OpStore %52 %65
               OpBranch %48
         %66 = OpLabel
         %67 = OpAccessChain %17 %14 %15 %16
         %68 = OpLoad %6 %67
         %69 = OpConvertSToF %49 %68
         %70 = OpCompositeConstruct %50 %69 %69 %69 %69
               OpStore %52 %70
               OpBranch %48
         %48 = OpLabel
               OpReturn
               OpFunctionEnd
