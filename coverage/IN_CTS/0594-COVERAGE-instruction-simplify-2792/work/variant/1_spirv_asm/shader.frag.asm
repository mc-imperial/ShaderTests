; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 68
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %9
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "_GLF_color"
               OpName %14 "buf0"
               OpMemberName %14 0 "_GLF_uniform_int_values"
               OpName %16 ""
               OpName %35 "i"
               OpDecorate %9 Location 0
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Output %7
          %9 = OpVariable %8 Output
         %10 = OpTypeInt 32 1
         %11 = OpTypeInt 32 0
         %12 = OpConstant %11 3
         %13 = OpTypeArray %10 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpConstant %10 0
         %18 = OpConstant %10 1
         %19 = OpTypePointer Uniform %10
         %23 = OpConstant %10 2
         %34 = OpTypePointer Function %10
         %44 = OpTypeBool
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %35 = OpVariable %34 Function
         %20 = OpAccessChain %19 %16 %17 %18
         %21 = OpLoad %10 %20
         %22 = OpConvertSToF %6 %21
         %24 = OpAccessChain %19 %16 %17 %23
         %25 = OpLoad %10 %24
         %26 = OpConvertSToF %6 %25
         %27 = OpAccessChain %19 %16 %17 %23
         %28 = OpLoad %10 %27
         %29 = OpConvertSToF %6 %28
         %30 = OpAccessChain %19 %16 %17 %18
         %31 = OpLoad %10 %30
         %32 = OpConvertSToF %6 %31
         %33 = OpCompositeConstruct %7 %22 %26 %29 %32
               OpStore %9 %33
               OpStore %35 %18
               OpBranch %36
         %36 = OpLabel
               OpLoopMerge %38 %39 None
               OpBranch %40
         %40 = OpLabel
         %41 = OpLoad %10 %35
         %42 = OpAccessChain %19 %16 %17 %17
         %43 = OpLoad %10 %42
         %45 = OpSLessThan %44 %41 %43
               OpBranchConditional %45 %37 %38
         %37 = OpLabel
         %46 = OpLoad %10 %35
         %47 = OpSGreaterThan %44 %46 %17
               OpSelectionMerge %49 None
               OpBranchConditional %47 %48 %50
         %48 = OpLabel
               OpBranch %49
         %50 = OpLabel
         %51 = OpLoad %10 %35
               OpSelectionMerge %54 None
               OpSwitch %51 %54 -1 %52 0 %53
         %52 = OpLabel
         %55 = OpAccessChain %19 %16 %17 %23
         %56 = OpLoad %10 %55
         %57 = OpConvertSToF %6 %56
         %58 = OpCompositeConstruct %7 %57 %57 %57 %57
               OpStore %9 %58
               OpBranch %54
         %53 = OpLabel
         %60 = OpAccessChain %19 %16 %17 %18
         %61 = OpLoad %10 %60
         %62 = OpConvertSToF %6 %61
         %63 = OpCompositeConstruct %7 %62 %62 %62 %62
               OpStore %9 %63
               OpReturn
         %54 = OpLabel
               OpBranch %49
         %49 = OpLabel
               OpBranch %39
         %39 = OpLabel
         %66 = OpLoad %10 %35
         %67 = OpIAdd %10 %66 %18
               OpStore %35 %67
               OpBranch %36
         %38 = OpLabel
               OpReturn
               OpFunctionEnd
